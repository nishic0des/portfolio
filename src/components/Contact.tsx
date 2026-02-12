import React, { useState, useRef } from "react";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [nameError, setNameError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<boolean>(false);

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setNameError(name === "");
		setEmailError(email === "");
		setMessageError(message === "");

		if (name && email && message) {
			const formData = {
				name: name,
				email: email,
				message: message,
			};

			console.log("Sending email with data:", formData);

			try {
				const apiUrl =
					process.env.NODE_ENV === "production"
						? "/api/send-email"
						: "http://localhost:3001/api/send-email";

				const response = await fetch(apiUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				const result = await response.json();

				if (response.ok && result.success) {
					console.log("Email sent successfully!", result);
					toast.success("Email sent successfully!");
					// Reset form fields after successful submission
					setName("");
					setEmail("");
					setMessage("");
					setNameError(false);
					setEmailError(false);
					setMessageError(false);
				} else {
					console.error("Failed to send email:", result.message);
					toast.error(
						result.message || "Failed to send email. Please try again later.",
					);
				}
			} catch (error) {
				console.error("Error sending email:", error);
				toast.error(
					"Failed to send email. Please check your connection and try again.",
				);
			}
		}
	};

	return (
		<div id="contact" className="items-container min-h-screen">
			<h1>Contact Me</h1>
			<form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
				<Box display="flex" gap={2}>
					<TextField
						required
						id="contact-name"
						name="name"
						label="Your Name"
						placeholder="What's your name?"
						value={name}
						onChange={(e) => setName(e.target.value)}
						error={nameError}
						helperText={nameError ? "Please enter your name" : ""}
						margin="normal"
						fullWidth
						sx={{
							"& .MuiOutlinedInput-root": {
								backgroundColor: "white",
							},
						}}
					/>
					<TextField
						required
						id="contact-email"
						name="email"
						label="Email / Phone"
						placeholder="How can I reach you?"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={emailError}
						helperText={
							emailError ? "Please enter your email or phone number" : ""
						}
						margin="normal"
						fullWidth
						sx={{
							"& .MuiOutlinedInput-root": {
								backgroundColor: "white",
							},
						}}
					/>
				</Box>
				<TextField
					required
					id="contact-message"
					name="message"
					label="Message"
					placeholder="What would you like to say?"
					multiline
					rows={6}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					error={messageError}
					helperText={messageError ? "Please enter the message" : ""}
					margin="normal"
					fullWidth
					sx={{
						"& .MuiOutlinedInput-root": {
							backgroundColor: "white",
						},
					}}
				/>
				<Button variant="contained" endIcon={<SendIcon />} type="submit">
					Send
				</Button>
			</form>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
}

export default Contact;
