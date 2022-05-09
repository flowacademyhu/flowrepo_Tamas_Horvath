
Feature: SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi szürke product page
#browser used: <Chrome> 
  #001
  Scenario: Changeing the product color above the main picture. 
    Given We are on the product page. 
    And the default color is grey.
     When we navigate the cursor to the silver color button
     And checking it
     And click on it
     And checking it
     Then the page jumps to the silvered color product page
     
  #002  
  Scenario: Selecting the product picture in the side galery. 
    Given We are on the product page. 
    And by default the first picture is selected.
     When we move the cursor one of the galery pictures
     And click on it
     Then the selected picture will be displayed in large in the main galery
  
     
  #003
  Scenario: Extension description will be shown
    Given We are on the product page
     When we are click on the "Teljes specifikáció" extension button
     Then the extension field will drop down
     And all the product specification will be displayed
 
  #004
  Scenario Outline: Information will displayed in pop-up
    Given We are on the product page at the specification section
     When we move the cursor to the <label> "i" icon
     Then a tooltip will appear with specification information

     Examples:
       |            label              | 
       |      Operációs rendszer      |     
       |         Processzor           |
       |          Háttértár           |
       |            GPS               |
       |      USB csatlakozó          |
       |        Kártyaolvasó          |
       |            HDMI              |   
  
  #005
  Scenario: Using the "tovább" underline button 
    Given We are on the product page 
    And in the product main detail tab
     When we are click on the button
     Then the page will be scroll down to the details section 
  
  #006
  Scenario: Using the "Értékelés" button 
    Given We are on the product page 
    And in the product main detail tab
     When we click on the button
     Then the page will scroll down to the ratting section

  #007
  Scenario: Subcription pop-up is displayed
    Given We are on the product page
     When we click on the bold "csatlakoz most!" button
     Then a pop-up will appear with the subcription information
     And registration input fields
     And a submit button
     And a x close button on the top right corner

  #008
  Scenario: Adding extended guarantee to the product
    Given We are on the product page in the guarantee section
     When we click one of the radio button
     And checking it
     Then the radio button became activ
     And the related text will be displayed on the right side of the price
     And a red x delete button at the end of the text

  #009
  Scenario: Extended guarantee pop-up will displayed. 
    Given We are on the product page. 
    But By default there is no extended guarantee added.
     When we click on the green basket button
     Then a pop-up will appear 
     And the product card will be displayed in it
     And the extended guarantee card with the radio buttons will be displayed

  #010
  Scenario: Login pop-up will be displayed using the "Elmentem" button. 
    Given We are on the product page
    But we are not logged in
     When we click on the button
     Then the login pop-up will displayed

  #011
  Scenario: Adding the product in to the chart. 
    Given We are on the product page
    But we are not logged in
     When we are click on the green basket button
     And checking it
     And click on the "Tovább" button
     And checking it
     Then an extended guarantee pop-up will displayed
     And pop-up will closed
     And a chart content side bar will be shown up in the right side with the selected product

  #012
  Scenario: Typeing 0 quantity in to the quantity field 
    Given We are on the product page 
    And in the main detail tab
    And by default there is one quantity is displayed.
     When we click on the quantity input field
     And typeing 0 quantity
     And clicking out the field
     Then the quantity will be changed to one.

  #013
  Scenario: Chart content side bar will be shown.
    Given We are on the product page
    And We had one product in the chart.
     When we move the cursor to the chart on the top right corner of the page
     And checking it
     And click on it
     And checking it
     Then the chart displayed the number of product content in it with a red background white number
     And a tooltip will appear
     And a side bar will appear
     And the product card will be shown in it
     And the checout button will displayed
     And the "összes törlése" button will shown
     And  the "Teljes kosár" button will shown

  #014
  Scenario: Loan pop-up will be shown 
    Given We are on the product page
     When we click on the "Hitelkalkulátor" button
     Then a pop-up will displayed with specific credit information

  #015
  Scenario: Larger picture will be shown in pop-up carousel for the product
    Given We are on the product page
     When we are click on the main picture of the product
     Then a large pop-up carousel will appear
     And with the product large pictures

  #016
  Scenario: Product price notification pop-up will be shown
    Given We are on the product page
     When we click on the "Értesítés kérek" button
     Then a pop-up will be displayed with email input field
     And price input field
     And a "Értesítés kérek" submit button
     And an x close button in the top right corner of the pop-up

  #017
  Scenario: Product price graphic chart information is displayed 
    Given We are on the product page
     When we navigate the cursor in to the price graphic chart
     And checking it
     Then the price will displayed on the chart
     

  #018
  Scenario: Six product displayed in the "Neked ajánljuk" carousel 
    Given We are on the product page
     When we scroll down to the section
     And checking it
     And click on the carousel right arrow 
     And checking it
     Then there are six products in the carousel
     And six new products product will be shown

  #019
  Scenario: Product header will be shown
    Given We are on the product page
     When we scroll down
     And checking it
     Then a product header will drop down
     And the product will be displayed
     And the product page section titles will be displayed 

  #020
  Scenario: Using the "Vissza az oldal tetejére" button
    Given We are on the product page
     When we scroll down to the end of the page
     And click on the button                                                                    
     Then the page will scroll to the top

  #021
  Scenario Outline: Magazin articles will be shown in a carousel 
    Given We are on the product page
     When we click on the <tag2> magazin topic
     Then the articles of the topic will be displayed in the carousel

     Examples:
       |        tag2         | 
       |    Minden teszt     |     
       |      IT Világ       |     
       |      Hardver        |
       |     Tudomány        |
       |      Játék          |
       |    Film + TV        |

       
  
  
      
     
     

     

     

     

     

     

     

     


      
      
     
     


     

     

     

     




 
       


