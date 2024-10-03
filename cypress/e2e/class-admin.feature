Feature: Admin Class page

    Admin can add classes and delete them.

    Background:
        Given Admin User has logged in to system and navigated to class page

    Scenario: Add Class Successfully
        Then A user clicks on the Add Class button
        When user enters the class name
        And User clicks on create button
        Then Verify new class has been created as per user given name

    Scenario: Delete All Class Successfully
        Then A user clicks on the SpeedDial button
        And User clicks on delete all button
        Then Verify no class records is present
