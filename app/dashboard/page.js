"use client"
import React, {useState} from 'react';
import Navigation from "@/component/Navigation";
import { z } from "zod";
import ErrorMessage from "@/component/ErrorMessage";

const Dashboard = () => {
	const [title, setTitle] = useState("");
	const [remarks, setRemarks] = useState("");
	const [email, setEmail] = useState("");
	const [priority, setPriority] = useState(0);
	const [errors, setErrors] = useState([])

	const ticketSchema = z.object({
		title: z.string().min(1, {message: "Your title is too short."}),
		email: z.string().email({message: "Email is required."}),
		remarks: z.string().min(1, {message: "Remarks is required."}),
		priority: z.number().min(1, {message: "Please choose priority for this ticket."})
	})

	function findErrors(name) {
		return errors.filter(item => item.path.includes(name)).map(item => item.message)[0]
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		const request = {title, remarks, priority, email};
		const result = ticketSchema.safeParse(request);

		if(!result.success)
			setErrors(result.error.issues)
		else
			setErrors([])

	}

	return (
		<div>
			<Navigation></Navigation>

			<form  onSubmit={onSubmit}>
				<ErrorMessage error={findErrors("title")}/>
				<label>
					<span>Title</span>
					<input placeholder={"Write title of the ticket"} type={"text"} value={title} onChange={(event) => setTitle(event.target.value) }/>
				</label>

				<ErrorMessage error={findErrors("remarks")}/>
				<label>
					<span>Remarks</span>
					<textarea value={remarks} onChange={(event) => setRemarks(event.target.value) }></textarea>
				</label>

				<ErrorMessage error={findErrors("email")}/>
				<label>
					<span>Email</span>
					<input placeholder={"Email address"} type={"text"} value={email} onChange={(event) => setEmail(event.target.value) }/>
				</label>



				<ErrorMessage error={findErrors("priority")}/>
				<label>
					<span>Priority</span>
					<select value={priority} onChange={(event) => setPriority(parseInt(event.target.value)) }>
						<option value={0}></option>
						<option value={1}>Low</option>
						<option value={2}>Medium</option>
						<option value={3}>High</option>
					</select>
				</label>

				<div className={"button-container"}>
					<button>Add Ticket</button>
				</div>
			</form>

			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					padding: 10px;
					width: 500px;
				}
				
				label {
					display: flex;
					justify-content: flex-start;
					padding: 10px;
					width:100%;
				}
				
				label > span {
					display: flex;
					flex: 1 1;
				}

        label > select, label > input, label > textarea {
	        background-color: white;
	        color: black;
	        
	        border: none;
	        
	        font-size: 1.15em;
	        padding: 10px;
	        
	        
          display: flex;
          flex: 3 3;

          font-family: 'Helvetica', Arial, sans-serif;
        }
        
        label > h2 {
          display: flex;
          flex: 1 1;
        }
        
        .button-container {
	        display: flex;
	        flex-direction: row;
	        align-items: center;
	        justify-content: space-around;
	        padding: 20px;
	        width: 100%;
        }
        
        button {
	        padding: 20px;
	        font-size: 1.2rem;
	        
        }
        
        
			
			
			`}</style>

		</div>
	);
};

export default Dashboard;