import React, { useState, useRef } from "react";
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import emailjs from "@emailjs/browser";

function Contact() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [nameError, setNameError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<boolean>(false);

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setNameError(name === "");
		setEmailError(email === "");
		setMessageError(message === "");

		if (name && email && message) {
			const templateParams = {
				name: name,
				email: email,
				message: message,
			};

			console.log(templateParams);
			emailjs
				.send(
					"rrr-mails",
					"template_mhxmgfv",
					templateParams,
					"PFAoOmQudd9rshHSv"
				)
				.then(
					(response) => {
						console.log(
							"Email sent successfully!",
							response.status,
							response.text
						);
						alert("Email sent successfully!");
						// Reset form fields after successful submission
						setName("");
						setEmail("");
						setMessage("");
						setNameError(false);
						setEmailError(false);
						setMessageError(false);
					},
					(error) => {
						console.error("Failed to send email:", error);
						alert("Failed to send email. Please try again later.");
						setName("");
						setEmail("");
						setMessage("");
						setNameError(false);
						setEmailError(false);
						setMessageError(false);
					}
				);
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
		</div>
	);
}

export default Contact;
