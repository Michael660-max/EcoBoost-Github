
const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainer = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const optionButtons = document.getElementById('optionButtons')
const scoreContainer = document.getElementById('scoreContainer')
const counter = document.getElementById('counter')
const instructions = document.getElementById('instructions')
active = true

// Gets the id of the container and changes the content within 

    let shuffledQuestions, currentQuestionIndex, score = 0

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
    // Event listener to start game  and show instructions 
    startButton.addEventListener('click', showInstructions) 
    // Increments to the next question on "click"
    // As soon as the game starts function starts 
    nextButton.addEventListener('click', () => { 
      currentQuestionIndex++
      active = true 
      setNextQuestion() 
    })
    
    //Function to hide elements 
    function hideDiv(e){ 
      e.classList.add('hide')
    }
    
    //Show instruction of the game start game when start is pressed 
    function showInstructions() {
        instructions.classList.remove('hide')
        startButton.addEventListener('click', () => { startGame(); hideDiv(instructions)}) // Fire start game 
      }
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
    

    // ----------------- Function to show questions -------------------------
    function showQuestion(question) {
      questionElement.innerText = question.question
      question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('option')
   // Checking to see if answer is correct 
        if (answer.correct && active) {
          button.dataset.correct = answer.correct
        }
        if (active) {
          button.addEventListener('click', selectAnswer)
        }
        
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

     //------------------- Function to set next question --------------------
     function setNextQuestion() {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    // --------------------- Selecting an answer ---------------------
    function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      if (active)
        setStatusClass(document.body, correct)
      Array.from(optionButtons.children).forEach(button => {
      //setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } 
      else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        active = true
      }

    }
    
   
    function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
        if (active) 
          score++
        counter.innerHTML = score
        console.log('Run')
        element.classList.add('correct')
      } 
      else {
        element.classList.add('wrong')
      }
      active = false
    }
      
    
    function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
    }
    
    

