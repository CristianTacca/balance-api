import * as yup from "yup";

const getBalanceSchema = yup.object().shape({
  id: yup.number().required(),
});

export default getBalanceSchema;
