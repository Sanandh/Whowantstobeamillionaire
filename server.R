#
# This is the server logic of a Shiny web application. You can run the
# application by clicking 'Run App' above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)

# Define server logic required to draw a histogram
Questions1<-QuestionRender(3)
server <- function(input, output) {
  output$SelectedQuestions <- renderText({ 
    Questions1$Question
    
  })
  output$OptionA <- renderText({ 
    Questions1$OptionA
    
  })
  output$OptionB <- renderText({ 
    Questions1$OptionB
    
  })
  output$OptionC <- renderText({ 
    Questions1$OptionC
    
  })
  output$OptionD <- renderText({ 
    Questions1$OptionD
    
  })
  
  
  
}
