# React + Vite - Fitness Trainer Appointment Scheduling

This project serves as the front-end component of a Fitness Trainer Application, offering seamless appointment management for fitness trainers. The application empowers trainers to efficiently handle their appointments, enabling them to perform tasks such as adding new clients, creating appointments for existing clients, editing appointment details, and deleting appointments. Clients without any associated appointments are automatically removed.

The application features a "Show Calendar" button, which, upon clicking, reveals a calendar view showcasing the trainer's appointments. To return to the original table view, the user can click the "Back to Clients" button.

User-friendly functionalities include the ability to edit client information by clicking on respective fields (First Name, Last Name, Location) and updating them upon clicking elsewhere. For appointment management, dedicated buttons for editing and deleting appointments are provided, facilitating a streamlined experience for fitness trainers.

Walk through:
1) Homepage
![FTA-Homepage1](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/5c6c381f-540c-4e58-ba12-097060089ff7)

On Clicking Add Client button, a modal will pop up which will display a form allowing the user to fill the required details.

2) Add Client Form


   ![FTA-AddClient](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/d1591782-de87-403c-95ec-eddf50d463da)
![FTA-AddClient2](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/69d42f93-d5ed-4df8-8737-9a3909f7bd2f)


On Clicking Add Client Button, these details are saved and get reflected in the homepage. Also an alert will pop up telling the user that he/she has successfully added a client.


3)Homepage After Adding a Client


![FTA-Homepage2](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/64e9d5c9-24de-45a5-8edd-174db8eb65e4)


Now the user can add an appointment by clicking on Add Appointment button. A modal with a form to fill the new appointment details for that particular client will pop up.


4) Add Appointment Form


   ![FTA-AddApp](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/43dcde9b-2089-4a88-9a90-67d342b7c154)


Users can use Edit and Delete buttons provided alongside each appointment to edit and delete the respective appointment. Clicking on Edit will show a modal which contains a form to enter new date and time. Clicking on Delete will simply delete that appointment


   Users can click the Show Calendar button to get a calendar view of their appointments.

   5) Calendar View

![FTA-SC1](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/249c63b4-2935-4519-9bbd-25c3b186a08d)


They can click on the Day option on the right side to view appointments for the day along with the name and time. The duration of each appointment is assumed to be 1 hour.

6) Calendar View - Day 

![FTA-SC2](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/6d972ae5-1e7d-4bc3-bbd0-d703693d4a5e)


Users can click on Agenda button to view all the booked appointments with the names.

7) Calendar View - Agenda

![FTA-SC3](https://github.com/Jayy-13/fitness-trainer-appointment/assets/97361502/298650d1-1e95-45e9-8928-b9eeb49118ec)


Finally, they can click on Back to Clients Page button to view the Table format.




