import { Typography, Box, Grid } from "@mui/material";
import React from "react";

import Link from "next/link";

function index() {
  const paragraphText = () => {
    return {
      textAlign: "left",
      fontSize: "15px",
      color: "#7A7A7A",
      fontFamily: "'Mont-Regular', sans-serif",
    };
  };

  return (
    <Box sx={{ ml: "10%", marginRight: {xs:"8%",md:'20%'}, pt: "25px", mt: {xs:"12%",sm:'10%' }}}>
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        PRIVACY POLICY
      </Typography>
      <Typography sx={paragraphText}>
        <br />
        This privacy policy explains how your personal information is collected,
        used, and disclosed by Techtiz.co.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        Information We Collect
      </Typography>

      <Typography sx={paragraphText}>
        <br />
        We may collect the following categories of personal information:
        <br /> <br />
        – Contact information, such as your name, email address, and phone
        number.
        <br />
        – Billing information, such as billing address and payment card details.
        <br />– Other information you provide to us, such as when you
        participate in a survey, contest, or promotion; when you request
        customer support; or when you communicate with us in any other way.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        How We Use Your Information
      </Typography>

      <Typography sx={paragraphText}>
        <br />
        We may use your personal information for the following purposes:
        <br />
        <br />
        To provide, maintain, and improve our services.
        <br />
        To personalize your experience on our website.
        <br />
        To communicate with you, including responding to your comments,
        questions, and requests; providing customer service and support; and
        sending you technical notices, updates, security alerts, and
        administrative messages.
        <br />
        To send you marketing and promotional communications, such as
        newsletters, special offers, and product announcements.
        <br />
        To process your transactions.
        <br />
        To comply with legal obligations.
      </Typography>
      <br />
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        Information Sharing and Disclosure
      </Typography>
      <Typography sx={paragraphText}>
        <br />
        We may share your personal information with the following categories of
        third parties:
        <br />
        <br />
        Service providers who perform services on our behalf, such as payment
        processing, data analysis, email delivery, hosting services, customer
        service, and marketing.
        <br />
        Business partners who offer a service to you jointly with us.
        <br />
        Other users of the website, if you choose to post information publicly.
        <br />
        Third parties as required by law or subpoena or if we reasonably believe
        that such action is necessary to (a) comply with the law and the
        reasonable requests of law enforcement; (b) to enforce our Terms of Use
        or to protect the security or integrity of our Service; and/or (c) to
        exercise or protect the rights, property, or personal safety of our
        users or others.
      </Typography>

      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        <br />
        Your Choices
      </Typography>
      <Typography sx={paragraphText}>
        <br /> You may opt-out of receiving promotional emails from us by
        following the instructions in those emails. If you opt-out, we may still
        send you non-promotional emails, such as those about your account or our
        ongoing business relations.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        <br />
        Security
      </Typography>
      <Typography sx={paragraphText}>
        <br />
        We take reasonable measures to help protect your personal information
        from loss, theft, misuse, and unauthorized access, disclosure,
        alteration, and destruction.
        <br />
      </Typography>
      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        <br /> Changes to This Privacy Policy
      </Typography>
      <Typography sx={paragraphText}>
        <br />
        We may change this privacy policy from time to time. If we make changes,
        we will notify you by revising the date at the top of the policy and, in
        some cases, we may provide you with additional notice (such as adding a
        statement to our website or sending you a notification). We encourage
        you to review the privacy policy whenever you access the website to stay
        informed about our information practices and the ways you can help
        protect your privacy.
      </Typography>

      <Typography
        variant="h2"
        sx={{
          pt: "18px",
          color: "#7A7A7A",
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "'Mont-Regular', sans-serif",
        }}
      >
        <br />
        Contact Us
        <br />
      </Typography>
      <Typography sx={paragraphText}>
        <br /> If you have any questions or concerns about this privacy policy,
        please contact us.
      </Typography>
    </Box>
  );
}

export default index;
