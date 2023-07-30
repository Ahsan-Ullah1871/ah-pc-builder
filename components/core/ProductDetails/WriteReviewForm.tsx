/* eslint-disable react-hooks/exhaustive-deps */
import PrimaryButton from "@/components/shared/PrimaryButton";
import Rating from "@/components/shared/Rating";
import TextArea from "@/components/shared/TextArea";
import ToastContainer from "@/components/shared/Toast";
import { useEffect, useState } from "react";

const WriteReviewForm = () => {
	// Alert State
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [AlertType, setAlertType] = useState<
		"success" | "error" | "warning"
	>("success");
	const [AlertMessages, setAlertMessages] = useState("");

	// form state
	const [review_form, setReviewForm] = useState({
		rating: 1,
		review: "",
		// reviewed_by: user?._id,
		// book_id: book_info?._id,
	});

	//formSubmitHandler
	const formSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const review_data = review_form;
		review_data.rating = Number(review_form.rating);

		fetch(`${process.env.BASE_URL}/ap/reviews/post`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(review_data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Network response was not ok"
					);
				}
				return response.json();
			})
			.then((data) => {
				// Process the response data, if any
				setAlertMessages(
					"Your review added succeessfull , it will show after 3 minutes , please check after 3 minutes "
				);
				setAlertType("success");
				setIsAlertOpen(true);
			})
			.catch((error) => {
				setAlertMessages(
					"Something is wrong with the request"
				);
				setAlertType("error");
				setIsAlertOpen(true);
			});

		// fetch()
	};

	// Input handler
	const inputChangeHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
		key: string
	) => {
		if (key == "keynotes") {
			setReviewForm((prev) => ({
				...prev,
				[key]: e.target.value.split(","),
			}));
		} else {
			setReviewForm((prev) => ({
				...prev,
				[key]: e.target.value,
			}));
		}
	};

	return (
		<form
			onSubmit={formSubmitHandler}
			className="   flex   rounded-xl w-full max-w-md  flex-col gap-4   px-7  py-6 "
		>
			<div className="   relative flex flex-col gap-6 ">
				{/* Review */}
				<TextArea
					placeHolder="Review text"
					currentValue={review_form.review}
					onChange={(e) =>
						inputChangeHandler(e, "review")
					}
					className=" border-white/80"
					required={true}
				/>

				{/* Rating */}
				{/* {/* Rating */}
				<Rating
					current_value={review_form.rating as number}
					clickHandler={(value) =>
						setReviewForm((prev) => ({
							...prev,
							["rating"]: Number(value),
						}))
					}
				/>
			</div>

			{/* Submit button */}
			<PrimaryButton
				type="submit"
				title="Submit"
				disabled={false}
			/>

			{/* Toast */}
			{isAlertOpen && (
				<ToastContainer
					type={AlertType}
					messages={AlertMessages}
					isAlertOpen={isAlertOpen}
					setIsAlertOpen={setIsAlertOpen}
					className=" max-w-md w-full absolute   -top-16   right-0 left-0 mx-auto flex justify-center"
				/>
			)}
		</form>
	);
};

export default WriteReviewForm;

