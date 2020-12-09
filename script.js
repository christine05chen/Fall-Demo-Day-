const disorderTypes = [
  'Any Mental Health Disorder',
  'Depression',
  'Anxiety Disorders',
  'Bipolar Disorder',
  'Eating Disorder',
  'Schizophrenia',
  'Alcohol use Disorder',
  'Drug use Disorder',
];

const disorderDataMale =
[9.3, 2.7, 2.8, 0.55, 0.13, 0.26, 12.6, 2, 1,3];

const disorderDataFemale =
[11.9, 4.1, 4.7, 0.65, 0.29, 0.25, 13.3, 0.8, 0.6];

const disorderChart1Context =
  document.querySelector('#disorder-chart-1').getContext('2d');

const disorderChart1 = new Chart
  (disorderChart1Context, {
    type: 'bar',
    data: {
      labels: disorderTypes,
      datasets: [{
        label: 'Percent of the Male Global Population diagnosed with this type of Disorder',
        backgroundColor: 'rgb(193, 246, 202)',
        data: disorderDataMale,
      },{
          label: 'Percent of the Female Global Population diagnosed with this type of Disorder',
        backgroundColor: 'rgb(202, 193, 246)',
        data: disorderDataFemale,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginsAtZero: true,
          },
          stacked: true
        }],
        xAxes: [{
          stacked: true 
        }]
      },
      title: {
        display: true,
        text: 'Global Population Diagnosed With Each Type of Disorder',
      },
      legend: {
        display: false
      },
    }
  });

//creates a bar chart

const issueTypes = [
  'Health Concerns',
  'Social Isolation',
  'Changed Eating Habits',
  'Excessive Workload',
  'Financial Problems',
  'Worsened Sleeping Habits',
  'Academic Concerns',
  'Negative Thoughts',
];

const issueDataByStudent = [
  [177, 167, 173, 106, 115, 168, 159, 86]
];

const issuesChart1Context = document.querySelector('#issues-chart-1').getContext('2d');

const issuesChart1 = new Chart(issuesChart1Context, {
  type: 'doughnut',
  data: {
    labels: issueTypes,
    datasets: [{
      label: 'Number of Issues',
      backgroundColor: [
        '#00008B',
        '#008B8B',
        '#8B0000',
        '#DAA520',
        '#FF7F50',
        '#BA55D3',
        '#FFFAF0',
        '#006400',
      ],
      data: issueDataByStudent[0]
    }],
  },
  options: {
    title: {
      display: true,
      text: 'Mental Health Issues Faced by College Students Amid Covid-19 Lockdown'
    }
  }
});

//creates a pie chart

const copingMethods = [
  'Self-Management',
  'Support from Others',
  'No Professional Help',
];

const copingData = 
[105, 47, 128];

const copingChartContext = document.querySelector('#issues-chart-2').getContext('2d');

const copingChart = new Chart(copingChartContext, {
    type: 'bar',
    data: {
      labels: copingMethods,
      datasets: [{
        label: 'Coping Methods of College Students Amid the Covid-19 Pandemic',
        backgroundColor: 'rgb(255, 179, 27)',
        data: copingData,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      },
      title: {
        display: true,
        text: 'Coping Methods of College Students Amid the Covid-19 Pandemic',
      },
      legend: {
        display: false
      },
    }
});

//creates a bar chart listing coping methods

const selfManagement = [
'Ignoring news about COVID-19',
'Sleeping Longer',
'Doing other tasks as a distraction',
'Drinking or smoking',
'Meditation and breathing exercises',
'Spiritual measures',
'Keeping routines',
'Positive reframing',
'Physical exercise',
'Enjoying streaming services and social media',
'Playing with pets',
'Journaling',
'Listening to music',
'Reading',
'Drawing',
'Planning activities for academic work/personal matters',
];

const selfManagementData =
[10, 7, 5, 2, 18, 5, 4, 2, 31, 22, 7, 5, 4, 2, 2, 15];


const selfManagementChart = document.querySelector('#management-chart-3').getContext('2d');

const managementChart = new Chart(selfManagementChart, {
  type: 'polarArea',
  data: {
    labels: selfManagement, 
    datasets: [{
      label: 'Self Management',
      backgroundColor: [
        '#FF0000',
        '#F69760',
        '#F6D960',
        '#C6F660',
        '#23B713',
        '#417D74',
        '#71E2B7',
        '#BEEBF7',
        '#68E0EE',
        '#2583E3',
        '#0D00BB',
        '#8961D0',
        '#C59DEF',
        '#F280FE',
        '#F7AF90',
        '#B2562D',
      ],
      data: selfManagementData
    }],
    options: {
    title: {
      display: true,
      text: 'Self Management Methods'
    }
  }
  }
});
//polar area chart listing self management methods

(function(){ 
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio"
  name="question${questionNumber}"
  value="${letter}">
              ${letter} :

  ${currentQuestion.answers[letter]}
            </label>` 
          );
        }
        output.push(
          `<div class="slide">
            <div class="question">
  ${currentQuestion.question} </div>
            <div class="answers">
  ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = 
  output.join('');
  }

  function showResults(){
    const answerContainers =
  quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach(
  (currentQuestion, questionNumber) => {
      const answerContainer =
  answerContainers[questionNumber];
      const selector =
  `input[name=question${questionNumber}]:
  checked`;
      const userAnswer =
  (answerContainer.querySelector(selector
  ) || {}).value;
      if(userAnswer ===
  currentQuestion.correctAnswer){
        numCorrect++;

  answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
  answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML =
  `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
slides[currentSlide].classList.remove(
'active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
    if(currentSlide === 0){
    previousButton.style.display = 'none';
    }
    else{
    previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
    }
    else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
    }
  }
  
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton =
  document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is mental health?",
      answers: {
        a: "A person's physical well-being",
        b: "A person's emotional and psychological well-being",
        c: "A person's ability to survive college"
      },
      correctAnswer: "b"
    },
    {
      question: "What is a healthy way to take care of your own mental health?",
      answers: {
        a: "Meditation, drawing, relax",
        b: "Insist on doing more homework",
        c: "Ignoring professional help"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of these is a mental health hotline number?",
      answers: {
        a: "Anxiety and Depression Association of America: 240-485-1001",
        b: "Depression and Bipolar Support Alliance: 800-826-3632",
        c: "Both of the above!"
      },
      correctAnswer: "c"
    },
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0

  showSlide(currentSlide);

  submitButton.addEventListener('click',showResults);

  previousButton.addEventListener("click", showPreviousSlide);

  nextButton.addEventListener("click", showNextSlide);
});