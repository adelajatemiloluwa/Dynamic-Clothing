import React, { useState } from 'react';
import './ReferralForm.css';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yearLevel: '',
    formTutorName: '',
    referralSource: '',
    referrerFirstName: '',
    referrerLastName: '',
    phoneNumber: '',
    email: '',
    bestTimeToContact: '',
    referralReasons: [],
    signature: '',
    date: '',
    otherReason: '',
    additionalInfo: '',
    wellbeingOutcome: '',
    studentAware: '',
    problemBegan: '',
    problemBeganSpecify: '',
    studentComment: '',
    counsellorComment: '',
    problemBeganHours: '',
    problemBeganDays: '',
    problemBeganWeeks: '',
    counsellorName: '',
    counsellorSignature: '',
    counsellorDate: ''
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    
    // Add all form data fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'referralReasons') {
        formDataToSend.append(key, value.join(', '));
      } else {
        formDataToSend.append(key, value);
      }
    });

    // Add Web3Forms access key
    formDataToSend.append("access_key", "c29d631c-063d-4ecb-b6f4-9f9b1840ef12");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          yearLevel: '',
          formTutorName: '',
          referralSource: '',
          referrerFirstName: '',
          referrerLastName: '',
          phoneNumber: '',
          email: '',
          bestTimeToContact: '',
          referralReasons: [],
          signature: '',
          date: '',
          otherReason: '',
          additionalInfo: '',
          wellbeingOutcome: '',
          studentAware: '',
          problemBegan: '',
          problemBeganSpecify: '',
          studentComment: '',
          counsellorComment: '',
          problemBeganHours: '',
          problemBeganDays: '',
          problemBeganWeeks: '',
          counsellorName: '',
          counsellorSignature: '',
          counsellorDate: ''
        });
      } else {
        setResult(data.message || "There was an issue with the submission.");
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
      console.error("Error submitting form", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedReasons = checked
          ? [...prev.referralReasons, value]
          : prev.referralReasons.filter((reason) => reason !== value);

        return {
          ...prev,
          referralReasons: updatedReasons,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="referral-form-container">
      <div className="form-header">
        <h1>Corona Secondary School, Agbara</h1>
        <h2>School Counselling and Wellbeing Programme Referral Form</h2>
        <p className="motto">No child is left behind in pursuance of our core values of commitment to the development of the total child.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="fe35829e-ac49-4d3a-a6a4-b9dc145aa384" />

        {/* Student's Details */}
        <div className="form-section">
          <h3>Student's Details*</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Year Level*</label>
              <input 
                type="text" 
                name="yearLevel" 
                value={formData.yearLevel} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Form Tutor's Name</label>
              <input 
                type="text" 
                name="formTutorName" 
                value={formData.formTutorName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>
        </div>

        {/* Referral Source */}
        <div className="form-section">
          <h3>Referral Source*</h3>
          <div className="radio-group">
            {[
              "Principal/Vice Principal",
              "Parent",
              "Year Tutor",
              "Form Tutor",
              "House Parent",
              "Subject Teacher"
            ].map((source) => (
              <label key={source}>
                <input 
                  type="radio" 
                  name="referralSource" 
                  value={source} 
                  checked={formData.referralSource === source} 
                  onChange={handleCheckboxChange} 
                  required
                />
                {source}
                {source === "Subject Teacher" && " (If you're a teacher, please discuss the referral first with the referrer's Form Tutor)"}
              </label>
            ))}
          </div>
        </div>

        {/* Referrer's Details */}
        <div className="form-section">
          <h3>Referrer's Details*</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="referrerFirstName" 
                value={formData.referrerFirstName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="referrerLastName" 
                value={formData.referrerLastName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Best time to contact*</label>
            <input 
              type="text" 
              name="bestTimeToContact" 
              value={formData.bestTimeToContact} 
              onChange={handleInputChange} 
              required 
            />
          </div>
        </div>

        {/* Reason for Referral */}
        <div className="form-section">
          <h3>Reason for the Referral*</h3>
          <p>(You can click more than one)</p>
          <div className="checkbox-grid">
            {[
              "Mental Health Concerns",
              "Emotional Well-Being",
              "Friends/Peer Relationships",
              "Bullying",
              "Grief and Loss",
              "Adjustment Issues",
              "Parental/Career Concerns",
              "Parental Separation/Divorce",
              "Suicide/Self-Harm",
              "Family Violence",
              "Learning Support/Educational Issues",
              "Anger",
              "Behavioral Concerns",
              "Career Guidance"
            ].map((reason) => (
              <label key={reason}>
                <input 
                  type="checkbox" 
                  value={reason} 
                  checked={formData.referralReasons.includes(reason)} 
                  onChange={handleCheckboxChange} 
                />
                {reason}
              </label>
            ))}
          </div>
        </div>

        {/* Other Reason for Referral */}
        <div className="form-section">
          <h3>Other reason for referral</h3>
          <p>(Please state below)</p>
          <div className="form-group">
            <textarea
              name="otherReason"
              value={formData.otherReason}
              onChange={handleInputChange}
              rows={3}
              className="form-textarea"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="form-section">
          <h3>Please provide further information regarding this referral: *</h3>
          <div className="form-group">
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={5}
              className="form-textarea"
              required
            />
          </div>
        </div>

        {/* Wellbeing Outcome */}
        <div className="form-section">
          <h3>Desired wellbeing outcome: <span className="required-asterisk">*</span></h3>
          <div className="form-group">
            <textarea
              name="wellbeingOutcome"
              value={formData.wellbeingOutcome}
              onChange={handleInputChange}
              rows={3}
              className="form-textarea"
              required
              placeholder="Describe the desired outcome for this student"
            />
          </div>
        </div>

        {/* Student Awareness */}
        <div className="form-section">
          <h3>Is the student aware of the referral? <span className="required-asterisk">*</span></h3>
          <div className="radio-group horizontal">
            {["Yes", "No", "Unsure"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="studentAware"
                  value={option}
                  checked={formData.studentAware === option}
                  onChange={handleInputChange}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Problem Duration */}
        <div className="form-section">
          <h3>How long has this been a problem?</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Hours</label>
              <input
                type="number"
                name="problemBeganHours"
                value={formData.problemBeganHours}
                onChange={handleInputChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Days</label>
              <input
                type="number"
                name="problemBeganDays"
                value={formData.problemBeganDays}
                onChange={handleInputChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Weeks</label>
              <input
                type="number"
                name="problemBeganWeeks"
                value={formData.problemBeganWeeks}
                onChange={handleInputChange}
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Problem Began Specify */}
        <div className="form-section">
          <h3>If other, please specify</h3>
          <div className="form-group">
            <textarea
              name="problemBeganSpecify"
              value={formData.problemBeganSpecify}
              onChange={handleInputChange}
              rows={2}
              className="form-textarea"
            />
          </div>
        </div>

        {/* Student's Comment */}
        <div className="form-section">
          <h3>Student's Comment</h3>
          <div className="form-group">
            <textarea
              name="studentComment"
              value={formData.studentComment}
              onChange={handleInputChange}
              rows={3}
              className="form-textarea"
              placeholder="Student's comments (if applicable)"
            />
          </div>
        </div>

        {/* Counsellor's Comment */}
        <div className="form-section">
          <h3>Counsellor's Comment/Action</h3>
          <div className="form-group">
            <textarea
              name="counsellorComment"
              value={formData.counsellorComment}
              onChange={handleInputChange}
              rows={3}
              className="form-textarea"
              placeholder="Counsellor's notes and planned actions"
            />
          </div>
        </div>

        {/* Counsellor Section */}
        <div className="form-section counsellor-section">
          <div className="form-group">
            <label>Counsellor’s Name:</label>
            <input
              type="text"
              name="counsellorName"
              value={formData.counsellorName}
              onChange={handleInputChange}
              className="line-input"
            />
          </div>
          <div className="form-group">
            <label>Counsellor’s Signature:</label>
            <input
              type="text"
              name="counsellorSignature"
              value={formData.counsellorSignature}
              onChange={handleInputChange}
              className="line-input"
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="text"
              name="counsellorDate"
              value={formData.counsellorDate}
              onChange={handleInputChange}
              className="line-input small"
              placeholder="MM/DD/YYYY"
            />
          </div>
        </div>

        {/* Referrer's Signature and Date */}
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Referrer's Signature*</label>
              <input 
                type="text" 
                name="signature" 
                value={formData.signature} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Date*</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">Submit Referral</button>
        </div>
      </form>

      <span>{result}</span>
    </div>
  );
};

export default ReferralForm;