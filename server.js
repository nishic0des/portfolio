const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // limit each IP to 5 requests per windowMs
	message: "Too many requests from this IP, please try again later.",
});

// Middleware
app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
		credentials: true,
	}),
);
app.use(express.json());
app.use("/api/", limiter);

// Email transporter configuration
const transporter = nodemailer.createTransport({
	service: "gmail", // Change this to your email service
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// Contact endpoint
app.post("/api/send-email", async (req, res) => {
	const { name, email, message } = req.body;

	// Input validation
	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			message: "All fields are required",
		});
	}

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({
			success: false,
			message: "Invalid email format",
		});
	}

	try {
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER, // Send to your email
			subject: `New Contact Form Message from ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #5000ca; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #5000ca; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({
			success: true,
			message: "Email sent successfully!",
		});
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({
			success: false,
			message: "Failed to send email. Please try again later.",
		});
	}
});

// Health check endpoint
app.get("/api/health", (req, res) => {
	res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
