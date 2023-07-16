// Assuming you have a function to fetch the patient and doctor names based on their IDs
function getPatientName(patientId) {
  // Your code to fetch the patient name based on the ID
  // Replace the following code with your actual database query logic
  const patient = db.query('SELECT name FROM patients WHERE id = ?', [patientId]);

  // Extract the patient name from the query result
  const patientName = patient.name;

  // Return the patient name
  return patientName;
}

function getDoctorName(doctorId) {
  // Your code to fetch the doctor name based on the ID
  // Replace the following code with your actual database query logic
  const doctor = db.query('SELECT name FROM doctors WHERE id = ?', [doctorId]);

  // Extract the doctor name from the query result
  const doctorName = doctor.name;

  // Return the doctor name
  return doctorName;
}

// Assuming you have an endpoint for fetching appointments
app.get('/appointment', function(req, res) {
  // Your code to fetch the appointments from the database
  function fetchAppointmentsFromDatabase() {
    // Perform a database query to fetch the appointments
    // Replace the following code with your actual database query logic
    const appointments = db.query('SELECT * FROM appointments');

    // Return the fetched appointments
    return appointments;
  }

  // Fetch the appointments from the database
  const appointments = fetchAppointmentsFromDatabase();

  // Transform the appointment data to include patient and doctor names
  var transformedAppointments = [];
  for (var i = 0; i < appointments.length; i++) {
    var appointment = appointments[i];

    var transformedAppointment = {
      pat_fullname: getPatientName(appointment.pat_id),
      doc_fullname: getDoctorName(appointment.doc_id),
      appointment_date: appointment.appointment_date
    };

    transformedAppointments.push(transformedAppointment);
  }

  // Send the transformed appointments as the response
  res.json(transformedAppointments);
});
