Feature: Motor Vehicle Stamp Duty Calculator

Scenario Outline: Calculate duty for motor Vehicle (isPassenger=<isPassengerVehicle>,purchase=<purchasePriceInput>|duty=<dutyAmount>)
    Given I open the motor vehicle stamp duty page
    When I click Check online
    Then I should see Motor vehicle reqistration duty calculator
    When I select for passenger vehicle "<isPassengerVehicle>"
    And I enter purchase price or value "<purchasePriceInput>"
    And I click Calculate button
    Then I should see in the calculation popup "Is this registration for a passenger vehicle?" "<isPassengerVehicle>"
    Then I should see in the calculation popup "Purchase price or value" "<purchasePriceAmount>"
    Then I should see in the calculation popup "Duty payable" "<dutyAmount>"
    # When I calculate with the following details
    #  | Is this registration for a passenger vehicle? | <isPassengerVehicle> |
    #  | Purchase price or value | <purchasePriceInput> |
    # Then I should see the following details in the calculation popup
    #  | Is this registration for a passenger vehicle? | <isPassengerVehicle> |
    #  | Purchase price or value | <purchasePriceAmount> |
    #  | Duty payable | <dutyAmount> |
    Examples:
     |isPassengerVehicle| purchasePriceInput | purchasePriceAmount | dutyAmount |
     | Yes              | 45000              | $45,000.00          | $1,350.00  |
     | No               | 25000              | $25,000.00          | $750.00    |
