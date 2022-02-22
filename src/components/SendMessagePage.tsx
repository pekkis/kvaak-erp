import { FC, memo } from "react";
import { Form, Field, Formik } from "formik";
import Button from "./Button";
import styles from "./HireDuckForm.module.css";
import messagingService from "../services/messaging";

const SendMessagePage: FC = () => {
  return (
    <section>
      <Formik
        initialValues={{
          title: "",
          message: ""
        }}
        onSubmit={async (values) => {
          const ret = await messagingService.post(values.title, values.message);

          console.log(ret, "RETURN OF TEH KING");
        }}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div className={styles.group}>
                <label className={styles.label} htmlFor="title">
                  Title
                </label>
                <Field id="title" name="title" />
              </div>

              <div className={styles.group}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <Field id="message" name="message" as="textarea" />
              </div>

              <div className={styles.group}>
                <Button type="submit">Send a message</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default memo(SendMessagePage);
