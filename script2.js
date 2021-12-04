
const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainer = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const optionButtons = document.getElementById('optionButtons')
const scoreContainer = document.getElementById('scoreContainer')
const counter = document.getElementById('counter')

// Gets the id of the container and changes the content within 

    let shuffledQuestions, currentQuestionIndex, score = 0

    startButton.addEventListener('click', startGame) // Fire start game 

    // Increments to the next question on "click"
    // As soon as the game starts function starts 
    nextButton.addEventListener('click', () => { 
      currentQuestionIndex++ 
      setNextQuestion() 
    })
    
   //------------------- Function to start the game  --------------------
    function startGame() {
      // .classList is a read only property that can be used with .add(), .remove(), .replace(), .toggle()
      startButton.classList.add('hide')
      nextButton.classList.add('hide')
      shuffledQuestions = questions.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
      questionContainer.classList.remove('hide')
      scoreContainer.classList.remove('hide')
      counter.classList.remove('hide')
      counter.innerHTML = score
      //counter.write('score')
      setNextQuestion()
    }
    
   //------------------- Function to set next question --------------------
    function setNextQuestion() {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    
    // ----------------- Function to show questions -------------------------
    function showQuestion(question) {
      questionElement.innerText = question.question
      question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('option')
   // Checking to see if answer is correct 
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        optionButtons.appendChild(button)
      })
    }
   // --------------------------- Resetting the buttons after an aswer has been chosen ---------------------------

    function resetState() {
      clearStatusClass(document.body)
      nextButton.classList.add('hide')
      while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild)
      }
    }

    // --------------------- Selecting an answer ---------------------
    function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
      Array.from(optionButtons.children).forEach(button => {
      //setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }

    }
    
   
    function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
        element.classList.add('correct')
        counter.innerHTML = score++
      } 
      else {
        element.classList.add('wrong')
      }
    }
    
    function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
    }
    
    const questions = [
      {
        question: 'Which is the Cleaner Energy?',
        answers: [
          { text: 'Solar', correct: true },
          { text: 'Oil', correct: false }
        ]
      },
      {
        question: 'Which is the Cleaner Energy?',
        answers: [
          { text: 'Hydro', correct: true },
          { text: 'Petroleum', correct: false },

        ]
      },
      {
        question: 'Which is the Cleaner Energy?',
        answers: [
          { text: 'Wind', correct: true },
          { text: 'Natural Gases', correct: false },
        ]
      },
      {
        question: 'Which is the Cleaner Energy?',
        answers: [
          { text: 'Nuclear', correct: false },
          { text: 'Biomas', correct: true }
        ]
      },
      {
         question: 'Which is the Cleaner Energy?',
         answers: [
           { text: 'Uranium', correct: false },
           { text: 'Geothermal', correct: true }
         ]
       }

    ]

