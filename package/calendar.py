from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Define your route for the calendar page
@app.route('/')
def calendar():
    return render_template('calendar.html')

# Define a route to fetch appointment data from your backend or database
@app.route('/appointments')
def get_appointments():
    # Fetch appointment data from your backend or database
    appointments = [
        {
            'doc_fullname': 'John Doe',
            'pat_fullname': 'Jane Smith',
            'appointment_date': '2023-07-13'
        },
        {
            'doc_fullname': 'Alice Johnson',
            'pat_fullname': 'Bob Williams',
            'appointment_date': '2023-07-14'
        },
        # Add more appointment data as needed
    ]
    return jsonify(appointments)

if __name__ == '__main__':
    app.run(debug=True)
