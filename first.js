

function getQuestions(ageGroup, dietType)
// this function will run through each question to segregate acc to user 
{
const Questions = {
//  the data for 4-6 years old 
    "4-6 years": {                                                  
        "veg" :[
            {
                question: "How frequently do you consume Milk and it's products?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                
              },
              {
                question: "How frequently do you consume Nuts and Oil seeds?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
              },
              {
                question: "How frequently do you consume green leafy vegetable?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            },
              {
                question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
                answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
                points: [0,1,2,3]
                
              },
              {
                question: "How frequently do you expose yourself to sunlight?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                
              },
              {
                question: "How frequently do you consume fruits?",
                answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
                points: [0,1,2,3]
            
              },
              {
                question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
              
              },
              {
                question: ".How frequently do you consume about 1-1.5 L of Water?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                
              },
              {
                question: "How often does your child engage in physical activities like running, jumping, or playing outside?",
                answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                
              },
              {
                question: "How frequently do you consume pulses in a week?",
                answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
                points: [0,1,2,3]
                
              }
        ],
        "non-veg": [
          {
            question: "How frequently do you consume Milk and it's products?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
           
          },
          {
            question: "How frequently do you consume Nuts and Oil seeds?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume Meat ( Chicken or mutton?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
                          },
          {
            question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you expose yourself to sunlight?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume fruits?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume Egg?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          
          },
          {
            question: ".How frequently do you consume about 1-1.5 L of Water?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          },
          {
            question: "How often does your child engage in physical activities like running, jumping, or playing outside?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume pulses in a week?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          } 
        ]
    },
    // 7-10 years info
    "7-9 years": {
        "veg" : [
          {
            question: "How frequently do you consume Milk and it's products?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume Nuts and Oil seeds?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume green leafy vegetable?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                          },
          {
            question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you expose yourself to sunlight?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume fruits?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          
          },
          {
            question: "How frequently do you consume about 1.5-2 L of Water?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
          },
          {
            question: "How often you participate in physical activities like running, cycling, playing sports, or outdoor games??",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume pulses in a week?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          }
        ],
        "non-veg" : [
          {
            question: "How frequently do you consume Milk and it's products?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume Nuts and Oil seeds?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume Meat ( Chicken or mutton?",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
                          },
          {
            question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you expose yourself to sunlight?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume fruits?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          },
          {
            question: "How frequently do you consume Egg?",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
          
          },
          {
            question: ".How frequently do you consume about 1.5-2 L of Water?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How often does your child participate in physical activities like running, cycling, playing sports, or outdoor games??",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
            
          },
          {
            question: "How frequently do you consume pulses in a week?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          } 
        ]
    },
    // 10-12yrs info data
    "10-13 years" : {
        "veg": [
          {
            question: "How frequently do you consume Milk and it's products?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          },
          {
            question: "How frequently do you consume Nuts and Oil seeds?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume green leafy vegetable?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
                          },
          {
            question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you expose yourself to sunlight?",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
            
          },
          {
            question: "How frequently do you consume fruits?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
          
          },
          {
            question: ".How frequently do you consume about 2.5-3 L of Water?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How often you engage in physical activities like playing sports, exercising, or participating in outdoor activities??",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          },
          {
            question: "How frequently do you consume pulses in a week?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          }
        ],
        "non-veg": [
          {
            question: "How frequently do you consume Milk and it's products?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume Nuts and Oil seeds?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume Meat ( Chicken or mutton?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
                          },
          {
            question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
          },
          {
            question: "How frequently do you expose yourself to sunlight?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
            
          },
          {
            question: "How frequently do you consume fruits?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
        
          },
          {
            question: "How frequently do you consume Egg?",
            answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
            points: [3,2,1,0]
          
          },
          {
            question: ".How frequently do you consume about 2.5-3 L of Water?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          },
          {
            question: "How often you engage in physical activities like playing sports, exercising, or participating in outdoor activities??",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
            points: [0,1,2,3]
        
            
          },
          {
            question: "How frequently do you consume pulses in a week?",
            answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
           
            
          } 
        ]
    },
    "14-17 years" : {
      "veg": [
        {
          question: "How frequently do you consume Milk and it's products?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How frequently do you consume Nuts and Oil seeds?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
      
        },
        {
          question: "How frequently do you consume green leafy vegetable?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
                        },
        {
          question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
          
        },
        {
          question: "How frequently do you expose yourself to sunlight?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How frequently do you consume fruits?",
          answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
          points: [3,2,1,0]
      
        },
        {
          question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
        },
        {
          question: ".How frequently do you consume about 3-4 L of Water?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How often do you engage in physical activities like playing sports, riding a bike, or playing outside??",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How frequently do you consume pulses in a week?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        }
      ],
      "non-veg": [
        {
          question: "How frequently do you consume Milk and it's products?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
          
        },
        {
          question: "How frequently do you consume Nuts and Oil seeds?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
      
        },
        {
          question: "How frequently do you consume Meat ( Chicken or mutton?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
                        },
        {
          question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How frequently do you expose yourself to sunlight?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How frequently do you consume fruits?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
        },
        {
          question: "How frequently do you consume Egg?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
        },
        {
          question: ".How frequently do you consume about 3-4 L of Water?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
          
        },
        {
          question: "How often do you engage in physical activities like playing sports, riding a bike, or playing outside??",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
        },
        {
          question: "How frequently do you consume pulses in a week?",
          answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
          points: [0,1,2,3]
      
          
        } 
      ]
  },
  "18-60 years" : {
    "veg": [
      {
        question: "How frequently do you consume Milk and it's products?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
      },
      {
        question: "How frequently do you consume Nuts and Oil seeds?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
    
      },
      {
        question: "How frequently do you consume green leafy vegetable?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
                      },
      {
        question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
      },
      {
        question: "How frequently do you expose yourself to sunlight?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you consume fruits?",
        answers: ["Daily", "2-3 times aweek", "5-6 times a week", "Never"],
        points: [3,2,1,0]
    
      },
      {
        question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
      
      },
      {
        question: ".How frequently do you consume about 3-4 L of Water?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      },
      {
        question: "How often do you engage in physical activities like exercising, playing sports, or doing outdoor activities??",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you consume pulses in a week?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
      }
    ],
    "non-veg": [
      {
        question: "How frequently do you consume Milk and it's products?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you consume Nuts and Oil seeds?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
    
      },
      {
        question: "How frequently do you consume Meat ( Chicken or mutton?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
                      },
      {
        question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you expose yourself to sunlight?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you consume fruits?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
    
      },
      {
        question: "How frequently do you consume Egg?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
      
      },
      {
        question: ".How frequently do you consume about 3-4 L of Water?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How often do you engage in physical activities like exercising, playing sports, or doing outdoor activities??",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
        points: [0,1,2,3]
    
        
      },
      {
        question: "How frequently do you consume pulses in a week?",
        answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
        
      } 
    ]
},
"60 above" : {
  "veg": [
    {
      question: "How frequently do you consume Milk and it's products?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
    },
    {
      question: "How frequently do you consume Nuts and Oil seeds?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
       points: [0,1,2,3]
            
  
    },
    {
      question: "How frequently do you consume green leafy vegetable?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
                    },
    {
      question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
      
    },
    {
      question: "How frequently do you expose yourself to sunlight?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
    },
    {
      question: "How frequently do you consume fruits?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
    },
    {
      question: "How frequently do you eat legumes (such as beans, lentils, or chickpeas)??",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
    
    },
    {
      question: ".How frequently do you consume about 1.5-2.5 L of Water?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
    },
    {
      question: "How often do you participate in physical activities such as walking, gardening, or light exercises??",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
      
    },
    {
      question: "How frequently do you consume pulses in a week?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
    }
  ],
  "non-veg": [
    {
      question: "How frequently do you consume Milk and it's products?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
      
    },
    {
      question: "How frequently do you consume Nuts and Oil seeds?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
  
    },
    {
      question: "How frequently do you consume Meat ( Chicken or mutton?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
                    },
    {
      question: "How frequently do you consume vegetable preparation (salad or cooked form)?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
      
    },
    {
      question: "How frequently do you expose yourself to sunlight?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
      
    },
    {
      question: "How frequently do you consume fruits?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
      points: [0,1,2,3]
  
    },
    {
      question: "How frequently do you consume Egg?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
    
    },
    {
      question: ".How frequently do you consume about 1.5-2.5 L of Water?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
    },
    {
      question: "How often do you participate in physical activities such as walking, gardening, or light exercises??",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
    },
    {
      question: "How frequently do you consume pulses in a week?",
      answers: ["Never", "2-3 times a week", "5-6 times a week", "Daily"],
                points: [0,1,2,3]
            
      
    } 
  ]
}

};
 // Return the questions for the selected age group and diet type
 return Questions[ageGroup][dietType];
}

let currentQuestionIndex = 0;
let questions = [];
let selectedAnswers = [];


// Function to display questions
function displayQuestions(questions) {
  currentQuestionIndex = 0; // Reset index at start
  selectedAnswers = []; // Reset selected answers
  displayCurrentQuestion(questions, currentQuestionIndex);
}

// Function to display current question
function displayCurrentQuestion(questions, index) {
  if (index >= questions.length) {
    displayResult(); // Show the result when quiz is complete
  } else {
    const questionWrapper = document.querySelector('.question-wrapper');
    questionWrapper.innerHTML = ''; // Clear the wrapper before inserting new content

    // Build HTML for the current question
    const questionHtml = `
      <div class="number">
        Question <span class="current">${index + 1}</span>
        <span class="total">/${questions.length}</span>
      </div>
      <div class="question">${questions[index].question}</div>
      <div class="answer-wrapper">
        ${questions[index].answers.map((option, answerIndex) => `
          <div class="answer" data-answer="${answerIndex}">
            <span class="text">${option}</span>
          </div>
        `).join('')}
      </div>
      <button type="button" class="btn-submit q-btn">Submit</button>
      <button class="next-btn q-btn hide">Next</button>
    `;

    // Insert the question HTML
    questionWrapper.innerHTML = questionHtml;

    // Define the `answers` variable here, after HTML is inserted
    const answers = document.querySelectorAll('.answer');

    // Handle answer selection
    answers.forEach((answer,answerIndex) => {
      answer.addEventListener('click', () => {
        // Remove selected class from other answers
        answers.forEach((otherAnswer) => {
          otherAnswer.classList.remove('selected');
        });
        // Add selected class to clicked answer
        answer.classList.add('selected');
        const pointsForAnswer = questions[index].points[answerIndex];
        selectedAnswers[index] = pointsForAnswer; // Store points for answer
        console.log('Selected answers:', selectedAnswers);
    
      });
    });

    // Select buttons after the HTML is inserted
    const submitButton = document.querySelector('.btn-submit');
    const nextButton = document.querySelector('.next-btn');

    // Hide the next button initially
    nextButton.classList.add('hide');

// Submit button event listener
submitButton.addEventListener('click', () => {
  let selectedOption = null;

  // Check if an answer is selected
  answers.forEach((answer, answerIndex) => {
    if (answer.classList.contains('selected')) {
      selectedOption = answer.querySelector('.text').textContent;
      const pointsForAnswer = questions[index].points[answerIndex];
      selectedAnswers[index] = pointsForAnswer; // Store points for answer
    }
  });

  if (!selectedOption) {
    alert('Please select an option before proceeding.');
  } else {
    nextButton.classList.remove('hide'); // Show the next button
  }
});

    // Next button event listener
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayCurrentQuestion(questions, currentQuestionIndex);
      } else {
        displayResult();
      }
    });
  }
}


function displayResult() {
  const endScreen = document.querySelector('.end-screen');
  document.querySelector('.quiz').classList.add('hide');
  endScreen.classList.remove('hide');

  // Calculate the score
 // Calculate the score
let score = 0;
for (let i = 0; i < questions.length; i++) {
  console.log(`Question ${i + 1}:`);
  console.log(`User answer index: ${selectedAnswers[i]}`);
  console.log(`Points for answer: ${questions[i].points[selectedAnswers[i]]}`);
  const pointsForAnswer = questions[i].points[selectedAnswers[i]];
  score += pointsForAnswer;
  console.log(`Score so far: ${score}`);
}
console.log(`Final score: ${score}`);

  // Update the result text
  const resultText = document.querySelector('.result-text');
  resultText.textContent = `Quiz Result!`;
  const progressBar = document.querySelector('.circular-progrees');
  const progressValue = document.querySelector('.progress-value');
  const maxScore = questions.length * 3;
  // Calculate the progress value
  const percentage = (score / maxScore) * 100;
  progressValue.textContent = `${percentage.toFixed(2)}%`;
  const angle = percentage * 3.6; // Convert percentage to angle
  progressBar.style.background = `conic-gradient(#d823df ${angle}deg, rgba(225, 225, 225, 0.13) ${angle}deg)`;
  // Update the score text
  const scoreText = document.querySelector('.score-text');
  scoreText.textContent = `Your score ${score} out of 30`;

  // Update the comment based on score
  const commentText = document.querySelector('.comment');
  if (score <= 10) {
    commentText.textContent = 'Poor Eating Habits';
  } else if (score <= 20) {
    commentText.textContent = 'Average Eating Habits';
  } else {
    commentText.textContent = 'Good Eating Habits';
  }

  // Update the circular progress bar
 // Event listener for try again button
  const tryAgainButton = document.querySelector('.try-again');
  tryAgainButton.addEventListener('click', () => {
    endScreen.classList.add('hide');
    document.querySelector('.quiz-info').classList.remove('hide');
  });
}


let userAgeGroup;
document.addEventListener('DOMContentLoaded', () => { 
  const startButton = document.querySelector('.start');
  const quizInfo = document.querySelector('.quiz-info');
  const quizSection = document.querySelector('.quiz');
  const endScreen = document.querySelector('.end-screen');

  startButton.addEventListener('click', () => {
    
    const childName = document.getElementById('child-name').value;
    userAgeGroup = document.getElementById('child-age').value;
    const dietType = document.querySelector('input[name="diet"]:checked');
  
    if (!childName || !userAgeGroup || !dietType) {
      if (!dietType) {
        alert("Please select a diet type!");
      } else {
        alert("Please fill in all fields!");
      }
      return;
    }
  
    const dietTypeValue = dietType.value.toLowerCase();
  
    if (dietTypeValue !== 'veg' && dietTypeValue !== 'non-veg') {
      alert("Invalid diet type. Please select either 'veg' or 'non-veg'.");
      return;
    }
  
    // Function to segregate questions according to input
    questions = getQuestions(userAgeGroup, dietTypeValue);
  
    // Display questions
    displayQuestions(questions);
    quizInfo.classList.add('hide');
  
      quizSection.classList.remove('hide');
    
    
        });
  const nextButton = document.querySelector('.next-result');

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      // Store the userAgeGroup value in localStorage
      localStorage.setItem('userAgeGroup', userAgeGroup);
      document.body.classList.add('fade-out');
      // Redirect to the diet plan page
      setTimeout(() => {
        window.location.href = 'dietplan.html';
      }, 500);
    });
  } else {
    console.error('Next button not found');
  }
});

// Add an event listener to the diet plan page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('dietplan.html')) {
    const dietImage = document.querySelector('.diet-images img');
    const dietDescription = document.querySelector('#diet-descriptions');
    const waterText = document.querySelector('.general-item:nth-child(1) p');
    const exerciseText = document.querySelector('.general-item:nth-child(3) p');

    // Retrieve the userAgeGroup value from localStorage
    const storedUserAgeGroup = localStorage.getItem('userAgeGroup');

    if (dietImage && dietDescription && waterText && exerciseText) {
      if (storedUserAgeGroup === '4-6 years') {
        dietImage.src = 'images/4-6years.jpeg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active children aged 4-6 years.';
        waterText.textContent = 'Drink at least 2-3 liters of water daily.';
        dietImage.style.width = '100%';
        exerciseText.textContent = 'Make sure to play and move for at least 60 minutes every day to stay healthy!';
      } else if (storedUserAgeGroup === '7-9 years') {
        dietImage.src = 'images/7-9years.jpeg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active children aged 7-9 years.';
        waterText.textContent = 'Drink at least 3-4 liters of water daily.';
        dietImage.style.width = '100%';
        exerciseText.textContent = 'Get at least 60 minutes of fun exercise every day to stay strong and healthy!';
      } else if (storedUserAgeGroup === '10-13 years') {
        dietImage.src = 'images/10-13years.F.jpg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active children aged 10-13 years.';
        waterText.textContent = 'Drink at least 4-5 liters of water daily.';
        exerciseText.textContent = 'Make sure to do at least 65 minutes of exercise every day to keep your body fit and healthy!';
     
        const secondDietImage = document.createElement('img');
        secondDietImage.src = 'images/10-13years.M.jpg';
        secondDietImage.style.display = 'inline-block'; // Display the images at the same level
        secondDietImage.style.marginLeft = '20px'; // Add some gap between the images
        dietImage.parentNode.appendChild(secondDietImage);
               
      } else if (storedUserAgeGroup === '14-17 years') {
        dietImage.src = 'images/14-17years.F.jpg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active children aged 14-17 years.';
        waterText.textContent = 'Drink at least 3-4 liters of water daily.';
        exerciseText.textContent = 'Make sure to get at least 30 minutes of exercise every day to stay healthy and active!';
      
        const secondDietImage = document.createElement('img');
        secondDietImage.src = 'images/14-17years.M.jpg';
        secondDietImage.style.display = 'inline-block'; // Display the images at the same level
        secondDietImage.style.marginLeft = '20px'; // Add some gap between the images
        dietImage.parentNode.appendChild(secondDietImage);
          
           
      
      } else if (storedUserAgeGroup === '18 -60 years') {
        dietImage.src = 'images/18-60years.F.jpeg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active adults aged 18-60 years.';
        waterText.textContent = 'Drink at least 2-3 liters of water daily.';
        exerciseText.textContent = 'Try to get at least 30 minutes of exercise every day to keep your body fit and strong!';
            
        const secondDietImage = document.createElement('img');
        secondDietImage.src = 'images/18-60years.M.jpeg';
        secondDietImage.style.display = 'inline-block'; // Display the images at the same level
        secondDietImage.style.marginLeft = '20px'; // Add some gap between the images
        dietImage.parentNode.appendChild(secondDietImage);

      } else if (storedUserAgeGroup === '60 above') {
        dietImage.src = 'images/60above.F.jpeg';
        dietDescription.textContent = 'Diet plan for normally nourished physical active adults aged 60 and above.';
        waterText.textContent = ' Drink at least 2-3 liters of water daily.';
        exerciseText.textContent = 'Try to get at least 30 minutes of gentle exercise every day to keep your body moving!';
    
        const secondDietImage = document.createElement('img');
  secondDietImage.src = 'images/60above.M.jpeg';
  secondDietImage.style.display = 'inline-block'; // Display the images at the same level
  secondDietImage.style.marginLeft = '10px'; 
  // Add some gap between the images
  dietImage.parentNode.appendChild(secondDietImage); 
    
      }
    } else {
      console.error('One or more diet plan elements not found');
    }
  }
});