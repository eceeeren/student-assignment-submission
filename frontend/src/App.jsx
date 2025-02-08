import { useState, useEffect } from 'react';
import {
    AppBar,
    Typography,
    Container,
    Paper,
    Tabs,
    Tab,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Card,
    CardContent,
    Grid, Box
} from '@mui/material';

const API_URL = 'http://localhost:8080';

const App = () => {
    const [tabValue, setTabValue] = useState(0);
    const [students, setStudents] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', email: '' });
    const [newAssignment, setNewAssignment] = useState({
        title: '',
        description: '',
        studentId: ''
    });

    useEffect(() => {
        fetchStudents();
        fetchAssignments();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch(`${API_URL}/students`);
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const fetchAssignments = async () => {
        try {
            const response = await fetch(`${API_URL}/assignments`);
            const data = await response.json();
            setAssignments(data);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });
            if (response.ok) {
                setNewStudent({ name: '', email: '' });
                fetchStudents();
            }
        } catch (error) {
            console.error('Error registering student:', error);
        }
    };

    const handleAssignmentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/assignments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAssignment),
            });
            if (response.ok) {
                setNewAssignment({ title: '', description: '', studentId: '' });
                fetchAssignments();
            }
        } catch (error) {
            console.error('Error submitting assignment:', error);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
        }}>
            <AppBar position="static">
                <Box sx={{
                    width: '100%',
                    position: 'relative',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 'auto'
                        }}
                    >
                        Student Assignment System
                    </Typography>
                </Box>
            </AppBar>

            <Container maxWidth={false} sx={{
                p: 3,
                flexGrow: 1,
                width: '100%'
            }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <Tabs
                        value={tabValue}
                        onChange={(event, newValue) => setTabValue(newValue)}
                        aria-label="basic tabs example"
                        centered
                    >
                        <Tab label="Students" />
                        <Tab label="Assignments" />
                    </Tabs>

                    {/* Students Tab Content */}
                    <div hidden={tabValue !== 0}>
                        <Grid container spacing={3} sx={{ p: 3 }}>
                            {/* Student Registration Form */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Register New Student
                                        </Typography>
                                        <form onSubmit={handleStudentSubmit}>
                                            <TextField
                                                fullWidth
                                                label="Student Name"
                                                margin="normal"
                                                value={newStudent.name}
                                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                margin="normal"
                                                type="email"
                                                value={newStudent.email}
                                                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                sx={{ mt: 2 }}
                                            >
                                                Register Student
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Student List */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Student List
                                        </Typography>
                                        <List>
                                            {students.map((student) => (
                                                <ListItem key={student.id} divider>
                                                    <ListItemText
                                                        primary={student.name}
                                                        secondary={student.email}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>

                    {/* Assignments Tab Content */}
                    <div hidden={tabValue !== 1}>
                        <Grid container spacing={3} sx={{ p: 3 }}>
                            {/* Assignment Form */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Submit New Assignment
                                        </Typography>
                                        <form onSubmit={handleAssignmentSubmit}>
                                            <TextField
                                                fullWidth
                                                label="Assignment Title"
                                                margin="normal"
                                                value={newAssignment.title}
                                                onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Assignment Description"
                                                margin="normal"
                                                multiline
                                                rows={4}
                                                value={newAssignment.description}
                                                onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                                            />
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel>Select Student</InputLabel>
                                                <Select
                                                    value={newAssignment.studentId}
                                                    label="Select Student"
                                                    onChange={(e) => setNewAssignment({ ...newAssignment, studentId: e.target.value })}
                                                >
                                                    {students.map((student) => (
                                                        <MenuItem key={student.id} value={student.id}>
                                                            {student.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                sx={{ mt: 2 }}
                                            >
                                                Submit Assignment
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Assignment List */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Assignment List
                                        </Typography>
                                        <List>
                                            {assignments.map((assignment) => (
                                                <ListItem key={assignment.id} divider>
                                                    <ListItemText
                                                        primary={assignment.title}
                                                        secondary={assignment.description}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </Box>
    );
};

export default App;