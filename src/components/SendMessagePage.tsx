import { FC, memo } from "react";
import { Form, Field, Formik } from "formik";
import Button from "./Button";
import styles from "./HireDuckForm.module.css";
import messagingService from "../services/messaging";

const SendMessagePage: FC = () => {
  return (
    <section>
      <h2>Children&apos; local notifications</h2>

      <Formik
        initialValues={{
          title: "",
          message: ""
        }}
        onSubmit={async (values) => {
          // const ret = await messagingService.post(values.title, values.message);
          //  console.log(ret, "RETURN OF TEH KING");

          await window.Notification.requestPermission();

          new Notification(values.title, {
            body: values.message
          });
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

      <h2>Real Tough Guys&apos; Push Notifications</h2>

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
