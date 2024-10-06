export const filterFinanceFields = (dataArray, allowedFields) =>
  dataArray.map((item) => {
    const filteredObject = {};
    allowedFields.forEach((field) => {
      if (field in item.shareable) {
        filteredObject[field] = item.shareable[field];
      }
    });
    return filteredObject;
  });

export const finColumns = {
  assets: [
    'asset_type',
    'description',
    'value',
    'currency',
    'purchase_date',
    'location',
    'is_liquid',
    'ownership_status',
    'serial_number',
    'notes',
  ],
  liabilities:[
    "amount",
    "interest_rate",
    "currency",
    "payment_frequency",
    "start_date",
    "due_date",
    "creditor_name",
    "creditor_contact_info",
    "collateral_type",
    "collateral_value",
    "collateral_currency",
    "collateral_location",
    "is_liquid",
    "is_revolving",
    "is_joint",
    "status",
    "liability_type",
],
insurance: [
    "insurance_type",
    "provider_name",
    "policy_number",
    "coverage_type",
    "start_date",
    "end_date",
    "network_type",
    "premium_amount",
    "currency",
    "notes",
], 
bankDetails: [
    "name",
    "email",
    "bank_name",
    "account_number",
    "ifsc_code",
    "institution_number",
    "branch_number",
    "transit_number",
    "address",
    "city",
    "state",
    "country",
    "postal_code",
    "currency",
],
investment: [
    "name",
    "investment_type",
    "value",
    "currency",
    "purchase_date",
    "location",
    "is_liquid",
    "ownership_status",
    "serial_number",
    "investment_category",
    "investment_sub_category",
    "investment_risk",
    "annual_investment_return",
    "investment_liquidity",
    "investment_taxation",
    "investment_time_horizon",
    "investment_goal",
    "investment_account_type",
    "investment_account_number",
    "investment_account_holder",
    "investment_account_status",
]
};
