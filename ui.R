library(shiny)
library(shiny.semantic)
library(recoder)
library(DT)

#singleton(tags$head(tags$script(src='myscript.js'))),
  
#### UI ####
semanticPage(
    singleton(tags$head(tags$script(src='myscript.js'))),
    singleton(tags$head(tags$script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'))),# Js for popup
    title = "R Shiny Millionaire - Who Wants To Be a Millionaire?",
    tags$link(rel = "stylesheet", type = "text/css", href = "style.css"),
    tags$link(rel = "stylesheet",  href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"),
    suppressDependencies("bootstrap"),
    div
    (
        id="UserName",
        class="topbar",
        "Hi User"
    ),
    div
    (
        class="container",
        div
        (
            img(src = "logo.png", width = "20%", height = "15%"),
            style = "text-align: center",
            h1 
            (class="gamename",
                "Who Wants To Be a Millionaire"
            ),
            tags$a
            (style="margin-top:10px;",
                href="?startover=yes" ,
                class="btn btn-default",
                "Start This Game Over"
            ),
         
        ),
        tags$br(),
        div
        (class="row",
        div 
        (class="col-md-8",
            div
                (id="qbox1",
                    class="millbox1",
                    #textOutput("SelectedQuestions")
                    "Which is the longest bridge in the world?"
                    
                 ),
            tags$br(),  

        div
        (class="row",
            span
            (
            div
                (
                class="col-md-6",
                div
                    (
                        id="choice1", class="millbox2",
                        'data-toggle' = "modal", 
                        'data-target' = '#myModala',
                        #textOutput("OptionA"),
                        "Manchac Swamp Bridge in the United",
                        onclick='PlaySound("choicea.mp3")'
                        
                     )
                )
            ,
            div
                (
                class="col-md-6",
                div
                (
                    id="choice2",class="millbox2",
                    #textOutput("OptionB"),
                    "Danyang–Kunshan Grand Bridge in China",
                    onclick='PlaySound("choicea.mp3")',
                    'data-toggle' = "modal", 
                    'data-target' = '#myModalb'
                    
                )
                )
                
            ),
            div
                (
                class="col-md-6",
                 div
                (
                    id="choice3",class="millbox2",
                    #textOutput("OptionC"),
                    "Changhua-Kaohsiung Viaduct in Taiwan",
                    onclick='PlaySound("choicea.mp3")',
                    'data-toggle' = "modal", 
                    'data-target' = '#myModalc'
                )
                  )
                ,
            div
                (
                class="col-md-6",
                div
                (
                    id="choice4",class="millbox2",
                    #textOutput("OptionD"),
                    "Dhola-Sadiya bridge in India      ",
                    onclick='PlaySound("choicea.mp3")',
                    'data-toggle' = "modal", 
                    'data-target' = '#myModald'
                )
                ),
           
        )
        ),#End of Question col-md-8 classs
        div
            (class="col-md-4",  
                div 
                (class="lifelines",
                    style = "text-align: center",
                    "Lifelines", tags$br(),
                        img( id ="ll5050",style="max-width:30%;",
                             src = "5050.png", width = "20%", height = "15%",
                             onclick="PlaySound('beep.wav');FiftyFifty();
                             this.src='5050used.png';"),
                        img( id ="llask",style="max-width:30%;",
                         src = "audience.png", width = "20%", height = "15%",
                    'data-toggle'="modal", 'data-target'="#myModalaudience",
                    onclick="PlaySound('beep.wav'); Audiance();
                             this.src='audienceused.png';"),
                    
                        img( id ="llskip",style="max-width:30%;",
                         src = "skip.png", width = "20%", height = "15%",
                         onclick="PlaySound('beep.wav');SkipQ();
                             this.src='skipused.png';"
                         )
                ) ,#End of div lifeline
                div
                (
                    class="prizes",
                    div
                    (
                        id="Question15",
                        class="openround",
                        "Question 15",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question15PrizeMoney",
                            class="prizemoney",
                            "$1000000"
                        )
                    ), # End of question 15 prize
                    div
                    (
                        id="Question14",
                        class="openround",
                        "Question 14",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question14PrizeMoney",
                            class="prizemoney",
                            "$500000"
                        )
                    ), # End of question 14 prize
                    div
                    (
                        id="Question13",
                        class="openround",
                        "Question 13",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question13PrizeMoney",
                            class="prizemoney",
                            "$250000"
                        )
                    ), # End of question 13 prize
                    div
                    (
                        id="Question12",
                        class="openround",
                        "Question 12",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question12PrizeMoney",
                            class="prizemoney",
                            "$125000"
                        )
                    ),# End of question 12 prize
                    div
                    (
                        id="Question11",
                        class="openround",
                        "Question 11",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question11PrizeMoney",
                            class="prizemoney",
                            "$64000"
                        )
                    ),# End of question 11 prize
                    div
                    (
                        id="Question10",
                        class="openround",
                        "Question 10",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question10PrizeMoney",
                            class="prizemoney",
                            "$32000"
                        )
                    ),# End of question 10 prize
                    div
                    (
                        id="Question9",
                        class="openround",
                        "Question 9",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question9PrizeMoney",
                            class="prizemoney",
                            "$16000"
                        )
                    ),# End of question 9 prize
                    div
                    (
                        id="Question8",
                        class="openround",
                        "Question 8",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question8PrizeMoney",
                            class="prizemoney",
                            "$8000"
                        )
                    ),# End of question 8 prize
                    div
                    (
                        id="Question7",
                        class="openround",
                        "Question 7",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question7PrizeMoney",
                            class="prizemoney",
                            "$4000"
                        )
                    ),# End of question 7 prize
                    div
                    (
                        id="Question6",
                        class="openround",
                        "Question 6",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question6PrizeMoney",
                            class="prizemoney",
                            "$2000"
                        )
                    ),# End of question 6 prize
                    div
                    (
                        id="Question5",
                        class="openround",
                        "Question 5",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question5PrizeMoney",
                            class="prizemoney",
                            "$1000"
                        )
                    ),# End of question 5 prize
                    div
                    (
                        id="Question4",
                        class="openround",
                        "Question 4",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question4PrizeMoney",
                            class="prizemoney",
                            "$500"
                        )
                    ),# End of question 4 prize 
                    div
                    (
                        id="Question3",
                        class="openround",
                        "Question 3",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        
                        (
                            id="Question3PrizeMoney",
                            class="prizemoney",
                            "$300"
                        )
                    ),# End of question 3 prize 
                    div
                    (
                        id="Question2",
                        class="openround",
                        "Question 2",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (
                            id="Question2PrizeMoney",
                            class="prizemoney",
                            "$200"
                        )
                    ),# End of question 2 prize 
                    div
                    (
                        id="Question1",
                        class="currentround",
                        "Question 1",
                        HTML('&nbsp;&nbsp;&nbsp;&nbsp;'),
                        span
                        (   id="Question1PrizeMoney",
                            class="prizemoneycurrent",
                            "$100"
                        ),
                    ),# End of question 1 prize 
                ) #End of Div Class Prizes
            ) #End of div col md4
                 
        ), #End of row classs
        div 
        (id="results" ,
            style="visibility:hidden;"
        ),
        singleton(tags$head(tags$script(src='myscript.js')))
    ), #End of container
    span
    (
        id="QuestionId",
        style="visibility:hidden;",
        "2"
    ),
    span
    (
        id="CorrectAnswer",
        style="visibility:hidden;",
        "c"
    ),
    span
    (
        id="5050",
        style="visibility:hidden;",
        "0"
    ),
    span
    (
        id="skip",
        style="visibility:hidden;",
        "0"
    ),
    span
    (
        id="aud",
        style="visibility:hidden;",
        "0"
    ),
    span
    (
        id="GameStatus",
        style="visibility:hidden;",
        "Starts"
    ),
    span
    (
      id="Prizemoney",
      style="visibility:hidden;",
      "0$"
    ),
    #Starts Modal A
    div(
        class="modal fade",
        id="myModala",
        tabindex="-1",
        role="dialog" ,
        'aria-labelledby'="myModalLabel",
        div
        (
            class="modal-dialog",
            role="document",
            div
            (class="modal-content",
                style="border:10px solid red; background-color:#FB5F0F;",
                div 
                (class="modal-body", style="text-align:center; font-size:36px;",
                    "Is That Your Final Answer?"
                ),
                div
                (class="modal-footer", style="text-align:center;",
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "Yes",
                        onclick="answerCheck('a')"
                    ), #End of Yes button
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "No"
                    ) #End of No button    
                    
                )
            )
        )
       
    ),  # End of A model
    div(
        class="modal fade",
        id="myModalb",
        tabindex="-1",
        role="dialog" ,
        'aria-labelledby'="myModalLabel",
        div
        (
            class="modal-dialog",
            role="document",
            div
            (class="modal-content",
                style="border:10px solid red; background-color:#FB5F0F;",
                div 
                (class="modal-body", style="text-align:center; font-size:36px;",
                    "Is That Your Final Answer?"
                ),
                div
                (class="modal-footer", style="text-align:center;",
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "Yes",
                        onclick="answerCheck('b')"
                    ), #End of Yes button
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "No"
                    ) #End of No button    
                    
                )
            )
        )
        
    ), #End of B model
    div(
        class="modal fade",
        id="myModalc",
        tabindex="-1",
        role="dialog" ,
        'aria-labelledby'="myModalLabel",
        div
        (
            class="modal-dialog",
            role="document",
            div
            (class="modal-content",
                style="border:10px solid red; background-color:#FB5F0F;",
                div 
                (class="modal-body", style="text-align:center; font-size:36px;",
                    "Is That Your Final Answer?"
                ),
                div
                (class="modal-footer", style="text-align:center;",
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "Yes",
                        onclick="answerCheck('c')"
                    ), #End of Yes button
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "No"
                    ) #End of No button    
                    
                )
            )
        )
        
    ), #End of c model
    
    div(
        class="modal fade",
        id="myModald",
        tabindex="-1",
        role="dialog" ,
        'aria-labelledby'="myModalLabel",
        div
        (
            class="modal-dialog",
            role="document",
            div
            (class="modal-content",
                style="border:10px solid red; background-color:#FB5F0F;",
                div 
                (class="modal-body", style="text-align:center; font-size:36px;",
                    "Is That Your Final Answer?"
                ),
                div
                (class="modal-footer", style="text-align:center;",
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "Yes",
                        onclick="answerCheck('d')"
                    ), #End of Yes button
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class="btn-lg btn-primary",
                        "No"
                    ) #End of No button    
                    
                )
            )
        )
        
    ),#End of D model
    
    div(
        class="modal fade",
        id="myModalaudience",
        tabindex="-1",
        role="dialog" ,
        'aria-labelledby'="myModalLabel",
        div
        (
            class="modal-dialog",
            role="document",
            div
            (class="modal-content",
                style="border:10px solid red; background-color:#FB5F0F;",
                div 
                (  class="modal-body", style="text-align:center; font-size:36px;",
                    "Ask the Audience",
                    tags$br(),
                    img( id="AskAudience" ,style="max-width:100%;",
                         src = "choicec3.png")
                ),
                div
                (class="modal-footer", style="text-align:center;",
                  
                    tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class=" btn-lg btn-default",
                        "Ok"
                    ) #End of No button    
                    
                )
            )
        )
        
    ),#End of Audiance model
    div(
        class="modal",
        id="Description",
        role="dialog" ,
        
        div
        (
            class="modal-dialog",
            role="document",
            
            div
            (class="modal-content",
                style="border:10px solid white; background-color:#FFBF05;text-align:center",
                div 
                (  class="modal-body", style="text-align:center; font-size:36px;",
                    "Who Wants To Be a Millionaire"
                ),
                div 
                (  class="modal-body", style="text-align:center; font-size:24px;",
                    "Who Wants to Be a Millionaire? is a quiz competition 
                    where contestants have to correctly answer a series of 
                    multiple-choice questions in order to advance to 
                    the next level / question."
                ),
              div 
              (  class="modal-body", style="text-align:center; font-size:15px;",
                 "Player Name:   ", "  ",
                tags$input(
                  Type="Text",id="PlayerName",Name="PName"
                )
              ),
                div 
                (  class="modal-body", style="text-align:center; font-size:18px;",
                    tags$strong("Instructions"),
                    tags$br(),
                    "1.Start the game and click on the $100 question.",
                    tags$br(),
                    "2.After clicking on the appropriate answer box , need to 
                    confirm and submit the same",
                    tags$br(),
                    "3.If user would like to the lifelines, 
                    click on the appropriate button.",
                    tags$br(),
                    div
                    (
                        style="text-align:center; font-size:20px;",
                        tags$strong("Lifelines"),
                        tags$br(),
                        "1.50-50 : The computer eliminates two wrong answers from the current question, 
                        leaving behind the correct answer and one incorrect answer",
                        tags$br(),
                        "2.Audience: The computer tallies the audience polls results and displays 
                        them as percentages to the users",
                        tags$br(),
                        "3.Skip: The computer eliminates Three wrong answers from the current question, 
                        leaving behind the correct answer ",
                        tags$br(),
                        "Note: User can use each only once per game"
                        
                    ),
                ),
                div
                (class="modal-footer", style="text-align:center;",
                    
                   tags$button
                    (
                        type="button",
                        'data-dismiss'="modal",
                        class=" btn-lg btn-default",
                        "Ok",
                      onclick="UpdateUserName()"
                    ) #End of No button    
                    
                )
            )
        )
        
    ),#End of Description model
    div(
      class="modal fade",
      id="PrizeDetails",
      tabindex="-1",
      role="dialog" ,
      'aria-labelledby'="myModalLabel",
      div
      (
        class="modal-dialog",
        role="document",
        div
        (class="modal-content",
          style="border:10px solid red; background-color:#FB5F0F;",
          div 
          (  id="PrizeDetailsBody",class="modal-body", style="text-align:center; font-size:36px;",
           
            "You have received the amount"
            
          ),
          div
          (class="modal-footer", style="text-align:center;",
            
            tags$button
            (
              type="button",
              'data-dismiss'="modal",
              class=" btn-lg btn-default",
              "Ok"
            ) #End of No button    
            
          )
        )
      )
      
    ) # Prize Details
  
)  ##end of semantic page
 
