import { useState } from "react"

import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"

import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"

import { DateUtils } from "react-day-picker"


const parseDate = (str, format, locale) => {
	const parsed = dateFnsParse(str, format, new Date(), { locale })
	return DateUtils.isDate(parsed) ? parsed : null
}

// no => {...} or Bug ... (this is the way)
const formatDate = (date, format, locale) =>
	dateFnsFormat(date, format, { locale })

const format = "dd MMM yyyy"

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

export default function DateRangePicker() {
	const [startDate, setStartDate] = useState(today)
	const [endDate, setEndDate] = useState(tomorrow)

	return (
		<div className="date-range-picker-container">
			<div>
				<label>From:</label>
				<DayPickerInput
					formatDate = {formatDate}
					format = {format}
					value = { startDate }
					parseDate = {parseDate}
					placeholder = {`${dateFnsFormat(new Date(), format)}`}
					dayPickerProps = {{
						modifiers: {
							disabled: {
								before: new Date()
							}
						}
					}}
					onDayChange={day => {
						setStartDate(day)
					}}
				/>
			</div>
			<div>
				<label>To:</label>
				<DayPickerInput
					formatDate = {formatDate}
					format = {format}
					value = { endDate }
					parseDate = {parseDate}
					placeholder = {`${dateFnsFormat(new Date(), format)}`}
					dayPickerProps={{
						modifiers: {
							disabled: {
								before: new Date()
							}
						}
					}}
					onDayChange={day => {
						setEndDate(day)
					}}
				/>
			</div>
			<style jsx>
				{`
					.date-range-picker-container div{
						display: grid;
						grid-template-columns: 30% 70%;
						padding: 10px;
					}
					label {
						padding-top: 10px;
					}
				`}
			</style>
			<style jsx global>
				{`
					.DayPickerInput input {
						width: 120px;
						padding: 10px;
						font-size: 16px;
					}
				`}
			</style>
		</div>
	)
}

