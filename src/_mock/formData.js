import { profileEndpoint } from 'src/configs/endpoints';

export const BasicInfo = [
  {
    label: 'First name',
    name: 'first_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Last name',
    name: 'last_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Middle name',
    name: 'middle_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Social insurance number',
    name: 'social_insurance_number',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Date of birth',
    name: 'date_of_birth',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'select',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
      { label: 'Prefer not to say', value: 'prefer_not_to_say' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Phone number',
    name: 'phone_number',
    type: 'number',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Mailing address',
    name: 'mailing_address',
    type: 'autocomplete',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Nationality',
    name: 'nationality',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Preferred language',
    name: 'preferred_language',
    type: 'select',
    options: [
      { label: 'English', value: 'english' },
      { label: 'French', value: 'french' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Social media links',
    name: 'social_media_links',
    type: 'text',
    defaultValue: "",  
    "isForm": true
  },
  {
    label: 'Short bio',
    name: 'short_bio',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Last login at',
    name: 'last_login_at',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Account status',
    name: 'account_status',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Account creation date',
    name: 'account_creation_date',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Is private',
    name: 'is_private',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Work authorization',
    name: 'work_authorization',
    type: 'select',
    options: 
        [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      
    defaultValue: '',
    "isForm": true
  },

  {
    label: 'Residency status',
    name: 'residency_status',
    type: 'select',
    options: [

        { label: 'Citizen', value: 'citizen' },
        { label: 'Permanent Resident', value: 'permanent resident' },
        { label: 'Non-Citizen Resident', value: 'non-citizen resident' },
        { label: 'Temporary Resident', value: 'temporary resident' },
        { label: 'Visitor/Tourist', value: 'visitor/tourist' },
        { label: 'Other', value: 'other' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Profile picture',
    name: 'profile_picture_url',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Work permit',
    name: 'work_permit_upload_url',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
];

export const ContactInfo = [
  {
    label: 'Home address',
    name: 'home_address',
    type: 'autocomplete',
    defaultValue: '',
    "isForm": true
  },
  {
      "label": "Phone number",
      "name": "phone_number",
      "type": "number",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "City",
      "name": "city",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Province",
      "name": "province",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Postal code",
      "name": "postal_code",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency Contact Information",
      "name": "postal_code",
      "type": "line",
      "defaultValue": "",
      "isForm": false
  },
  {
      "label": "Emergency contact name",
      "name": "emergency_contact_name",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency contact phone",
      "name": "emergency_contact_phone",
      "type": "number",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency contact email",
      "name": "emergency_contact_email",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency contact address",
      "name": "emergency_contact_address",
      "type": "autocomplete",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency contact relationship",
      "name": "emergency_contact_relationship",
      "type": "select",
      "options": [{label: 'Spouse', value: 'spouse'}, {label: 'Parent', value: 'parent'}, {label: 'Sibling', value: 'sibling'}, {label: 'Friend', value: 'friend'}, {label: 'Other', value: 'other'}],
      "defaultValue": "",
      "isForm": true
  },

  {
    label: 'Emergency contact city',
    name: 'emergency_contact_city',
    type: 'autocomplete',
    defaultValue: '',
    "isForm": true
  },
  {
      "label": "Emergency contact province",
      "name": "emergency_contact_province",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  },
  {
      "label": "Emergency contact postal code",
      "name": "Emergency_contact_postal_code",
      "type": "text",
      "defaultValue": "",
      "isForm": true
  }
]

export const EmployeeInfo = [
  {
    label: 'Employment status',
    name: 'employment_status',
    type: 'select',
    options: [
      { label: 'Employed', value: 'employed' },
      { label: 'Unemployed', value: 'unemployed' },
      { label: 'Self employed', value: 'self-employed' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current employer',
    name: 'current_employer',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current job title',
    name: 'current_job_title',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current start date',
    name: 'current_start_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current end date',
    name: 'current_end_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Employment type',
    name: 'employment_type',
    type: 'select',
    options: [
      { label: 'Full-time', value: 'Full time' },
      { label: 'Part-Time', value: 'Part-Time' },
      { label: 'Contract', value: 'contract' },
      { label: 'Temporary', value: 'temporary' },
      { label: 'Internship', value: 'internship' },
      { label: 'Freelance', value: 'freelance' },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current salary',
    name: 'current_salary',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Salary history',
    name: 'salary_history',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Office address',
    name: 'office_address',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Supervisor name',
    name: 'supervisor_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Supervisor email',
    name: 'supervisor_email',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Job responsibilities',
    name: 'job_responsibilities',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Benefits package',
    name: 'benefits_package',
    type: 'multiselect',
    options: [
        { title: 'Health Insurance', value: "health insurance" },
        { title: 'Dental Insurance', value: "dental insurance" },
        { title: 'Vision Insurance', value: "vision insurance" },
        { title: 'Retirement Savings Plans', value: "retirement savings plans" },
        { title: 'Life Insurance', value: "life insurance" },
        { title: 'Disability Insurance', value: "disability insurance" },
        { title: 'Paid Time Off (PTO)', value: "paid time off (PTO)" },
        { title: 'Flexible Spending Accounts (FSAs) or Health Savings Accounts (HSAs)', value: "flexible spending accounts (FSAs) or health savings accounts (HSAs)" },
        { title: 'wellness programs', value: "wellness programs" },
        { title: 'Tuition Reimbursement', value: "tuition reimbursement" },
        { title: 'Childcare Assistance', value: "childcare assistance" },
        { title: 'Employee Assistance Programs (EAPs)', value: "employee assistance programs (EAPs)" },
        { title: 'Other', value: "other" },
      ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Professional memberships',
    name: 'professional_memberships',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Training programs',
    name: 'training_programs',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Certifications',
    name: 'certifications',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Previous employment history',
    name: 'Previous_employment_history',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Income verification document 1',
    name: 'income_verification_document_1',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Income verification document 2',
    name: 'income_verification_document_2',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
 
];

export const EducationInfo = [
  {
    label: 'Institution name',
    name: 'institution_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Degree',
    name: 'degree',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Certificate',
    name: 'certificate_url',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Field of study',
    name: 'field_of_study',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
 
  {
    label: 'Graduation year',
    name: 'graduation_year',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  
  {
    label: 'Institution type',
    name: 'institution_type',
    type: 'select',
    options: [
      { label: 'University', value: 'university' },
      { label: 'College', value: 'college' },
      { label: 'High School', value: 'high_school' },
      { label: 'Vocational School', value: 'vocational_school' },
      { label: 'Trade School', value: 'trade_school' },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Start date',
    name: 'start_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'End date',
    name: 'end_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Current status',
    name: 'current_status',
    type: 'select',
    options: [
      { label: 'Ongoing', value: 'ongoing' },
      { label: 'Completed', value: 'completed' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Institution address',
    name: 'institution_address',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Institution city',
    name: 'institution_city',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Institution state',
    name: 'institution_state',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Institution country',
    name: 'institution_country',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Institution postal code',
    name: 'institution_postal_code',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Cgpa',
    name: 'Cgpa',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Additional notes',
    name: 'additional_notes',
    type: 'textarea',
    defaultValue: '',
    "isForm": true
  },
  
];

export const FinancialInfo = [
  {
    label: 'Monthly income',
    name: 'monthly_income',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Sources of income',
    name: 'sources_of_income',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Bank account number',
    name: 'bank_account_number',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Bank account type',
    name: 'bank_account_type',
    type: 'select',
    options: [
      { label: 'Checking', value: 'checking' },
      { label: 'savings', value: 'savings' },
      { label: 'Other Account', value: 'other_account' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Bank account balance',
    name: 'bank_account_balance',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Investment portfolio value',
    name: 'investment_portfolio_value',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Property ownership',
    name: 'property_ownership',
    type: 'select',
    options: [
      { label: 'Own', value: 'own' },
      { label: 'Rent', value: 'rent' },
      { label: 'Mortgage', value: 'mortgage' },
      { label: 'Lease', value: 'lease' },
      { label: 'Joint Ownership', value: 'joint_ownership' },
      { label: 'Family Owned', value: 'family_owned' },
      { label: 'Investment Property', value: 'investment_property' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Life insurance policy number',
    name: 'life_insurance_policy_number',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Health insurance provider',
    name: 'health_insurance_provider',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Annual income',
    name: 'annual_income',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Tax return amount',
    name: 'tax_return_amount',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Credit score',
    name: 'credit_score',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Credit history',
    name: 'Credit_history',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
];

export const IdentificationInfo = [
  {
    label: 'Document type',
    name: 'document_type',
    type: 'select',
    options: [
      { label: "Driver's License", value: 'drivers_license' },
      { label: 'passport', value: 'passport' },
      { label: 'Health Card', value: 'health_card' },
      { label: 'Citizenship Card', value: 'citizenship_card' },
      { label: 'Permanent Resident Card', value: 'permanent_resident_card' },
      { label: 'Provincial ID Card', value: 'provincial_id_card' },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Document number',
    name: 'document_number',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Issuing country',
    name: 'issuing_country',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Date of issue',
    name: 'date_of_issue',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Date of expiry',
    name: 'date_of_expiry',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Additional notes',
    name: 'additional_notes',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Document',
    name: 'Document_url',
    type: 'upload',
    defaultValue: '',
    "isForm": true
  },
];

export const RealEstateInfo = [
  {
    label: 'Current property ownership details',
    name: 'current_property_ownership_details',
    type: 'select',
    options: [
      { label: 'Sole Ownership', value: 'sole_ownership' },
      { label: 'Joint Ownership', value: 'joint_ownership' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Property addresses',
    name: 'property_addresses',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Mortgage details',
    name: 'mortgage_details',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Property value',
    name: 'property_value',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Ownership history',
    name: 'ownership_history',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Property type',
    name: 'property_type',
    type: 'select',
    options: [
      { label: 'Residential', value: 'Residential' },
      { label: 'Commercial', value: 'commercial' },
    ],
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Rental income',
    name: 'rental_income',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Property expenses',
    name: 'property_expenses',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Additional comments',
    name: 'Additional_comments',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
];

export const ResidentialHistory = [
  {
    label: 'Last address',
    name: 'last_address',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Landlord name',
    name: 'landlord_name',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Landlord contact',
    name: 'landlord_contact',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Start date',
    name: 'start_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'End date',
    name: 'end_date',
    type: 'date',
    defaultValue: '',
    "isForm": true
  },
  {
    label: 'Reason for leaving',
    name: 'reason_for_leaving',
    type: 'text',
    defaultValue: '',
    "isForm": true
  },
];

const getLabels = (arr) => arr.map((e) => e.label);

export const getFormFields = (slug) => {
  let data = {};
  switch (slug) {
    case 'personal-info':
      data = { form: BasicInfo, title: 'Personal Information', url: profileEndpoint.basic };
      break;
    case 'contact-info':
      data = { form: ContactInfo, title: 'Contact Info', url: profileEndpoint.contact };
      break;
    case 'education-info':
      data = { form: EducationInfo, title: 'Education Info', url: profileEndpoint.eduInfo };
      break;
    case 'employment-info':
      data = { form: EmployeeInfo, title: 'Employment Info', url: profileEndpoint.empInfo };
      break;
    case 'financial-info':
      data = { form: FinancialInfo, title: 'Financial Info', url: profileEndpoint.finInfo };
      break;
    case 'identification-info':
      data = {
        form: IdentificationInfo,
        title: 'Identification Info',
        url: profileEndpoint.idInfo,
      };
      break;
    case 'realestate-info':
      data = { form: RealEstateInfo, title: 'Real Estate Info', url: profileEndpoint.reInfo };
      break;
    case 'residential-info':
      data = {
        form: ResidentialHistory,
        title: 'Residential History',
        url: profileEndpoint.resInfo,
      };
      break;
    case 'field-labels':
      data = {
        basic: getLabels(BasicInfo),
        contact: getLabels(ContactInfo),
        eduInfo: getLabels(EducationInfo),
        empInfo: getLabels(EmployeeInfo),
        finInfo: getLabels(FinancialInfo),
        idInfo: getLabels(IdentificationInfo),
        reInfo: getLabels(RealEstateInfo),
        resInfo: getLabels(ResidentialHistory),
      };
      break;

    default:
      break;
  }
  return data;
};
