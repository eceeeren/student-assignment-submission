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
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Card,
    CardContent,
    Stack,
    Box
} from '@mui/material';
import { layoutStyles, listStyles, formStyles, cardStyles } from './styles.js';

const API_URL = 'http://localhost:8080';

const App = () => {
    const [tabValue, setTabValue] = useState(0);
    const [students, setStudents] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: ''
    });
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

        if (!newStudent.name.trim() || !newStudent.email.trim()) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/students`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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

        if (!newAssignment.title.trim() || !newAssignment.studentId) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/assignments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
        <Box sx={layoutStyles.container}>
            <AppBar position="static">
                <Box sx={layoutStyles.header}>
                    <Typography variant="h3" sx={layoutStyles.headerTitle}>
                        Student Assignment System
                    </Typography>
                </Box>
            </AppBar>

            <Container maxWidth={false} sx={layoutStyles.mainContainer}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} centered>
                        <Tab label="Students" />
                        <Tab label="Assignments" />
                    </Tabs>

                    {/* Students Tab Content */}
                    <Box role="tabpanel" hidden={tabValue !== 0} sx={{ p: 3 }}>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                            {/* Student Registration Form */}
                            <Box flex={1}>
                                <Card sx={cardStyles.card}>
                                    <CardContent sx={cardStyles.cardContent}>
                                        <Typography variant="h6" gutterBottom>
                                            Register New Student
                                        </Typography>
                                        <form onSubmit={handleStudentSubmit} style={formStyles.form}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Student Name"
                                                margin="normal"
                                                value={newStudent.name}
                                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                                                error={!newStudent.name.trim()}
                                                helperText={!newStudent.name.trim() ? "Name is required" : ""}
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                label="Email"
                                                margin="normal"
                                                type="email"
                                                value={newStudent.email}
                                                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                                                error={!newStudent.email.trim()}
                                                helperText={!newStudent.email.trim() ? "Email is required" : ""}
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                sx={formStyles.submitButton}
                                                fullWidth
                                            >
                                                Register Student
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Box>

                            {/* Assignment List */}

                            {/* Student List */}
                            <Box flex={1}>
                                <Card sx={cardStyles.card}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Student List
                                        </Typography>
                                        <List>
                                            {students.map((student, index) => (
                                                <ListItem key={student.id} divider>
                                                    <Box sx={listStyles.listContent}>
                                                        <Box sx={listStyles.numberBadge}>
                                                            {index + 1}
                                                        </Box>
                                                        <Box sx={listStyles.listText}>
                                                            <Typography variant="body1" sx={listStyles.listItemTitle}>
                                                                <strong>Name:</strong> {student.name}
                                                            </Typography>
                                                            <Typography variant="body2" sx={listStyles.listItemSecondary}>
                                                                <strong>Email:</strong> {student.email}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Assignments Tab Content */}
                    <Box role="tabpanel" hidden={tabValue !== 1} sx={{ p: 3 }}>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                            {/* Assignment Form */}
                            <Box flex={1}>
                                <Card sx={cardStyles.card}>
                                    <CardContent sx={cardStyles.cardContent}>
                                        <Typography variant="h6" gutterBottom>
                                            Submit New Assignment
                                        </Typography>
                                        {students.length === 0 ? (
                                            <Typography color="error" sx={{ mt: 2 }}>
                                                No students available. Please add students before creating assignments.
                                            </Typography>
                                        ) : (
                                            <form onSubmit={handleAssignmentSubmit} style={formStyles.form}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Assignment Title"
                                                    margin="normal"
                                                    value={newAssignment.title}
                                                    onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                                                    error={!newAssignment.title.trim()}
                                                    helperText={!newAssignment.title.trim() ? "Title is required" : ""}
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
                                                <FormControl fullWidth margin="normal" required error={!newAssignment.studentId}>
                                                    <InputLabel>Select Student</InputLabel>
                                                    <Select
                                                        variant="outlined"
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
                                                    sx={formStyles.submitButton}
                                                    fullWidth
                                                >
                                                    Submit Assignment
                                                </Button>
                                            </form>)}
                                            </CardContent>
                                            </Card>
                                            </Box>

                                        {/* Assignment List */}
                                        <Box flex={1}>
                                            <Card sx={cardStyles.card}>
                                                <CardContent>
                                                    <Typography variant="h6" gutterBottom>
                                                        Assignment List
                                                    </Typography>
                                                    <List>
                                                        {assignments.map((assignment, index) => (
                                                            <ListItem key={assignment.id} divider>
                                                                <Box sx={listStyles.listContent}>
                                                                    <Box sx={listStyles.numberBadge}>
                                                                        {index + 1}
                                                                    </Box>
                                                                    <Box sx={listStyles.listText}>
                                                                        <Typography variant="body1" sx={listStyles.listItemTitle}>
                                                                            <strong>Title:</strong> {assignment.title}
                                                                        </Typography>
                                                                        <Typography variant="body2" sx={listStyles.listItemSecondary}>
                                                                            <strong>Description:</strong> {assignment.description}
                                                                        </Typography>
                                                                        <Typography variant="body2" sx={listStyles.listItemSecondary}>
                                                                            <strong>Submitted By:</strong> {assignment.submittedBy?.name || 'Unknown'}
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </CardContent>
                                            </Card>
                                        </Box>
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default App;