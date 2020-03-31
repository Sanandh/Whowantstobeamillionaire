library(shiny)
library(data.table)
library(recoder)
library(DT)
library(shiny)
library(data.table)
library(recoder)
library(DT)
library(dplyr)
####WWW Tables####
Questions <- data.table::fread('./www/FunnyQuestions.csv', na.strings = '')
QuestionRender <- function(id)
{ 
 
  Questions1<-Questions %>% 
    filter(QID==id)
  return(Questions1)
  
}
