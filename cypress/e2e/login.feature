Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the School Management System login page
        Then the url will contains the choose subdirectory

    Scenario: Admin Success Login
        Given User will navigate to admin login
        When A user enters the username "testqa1@school.com", the password "!Aworker2#", and clicks on the login button
        Then the url will contains the Adminlogin subdirectory
    