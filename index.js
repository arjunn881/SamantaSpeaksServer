import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import multer from "multer";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import messageRouter from "./routes/Home/message.js";
import articleRouter from "./routes/Home/article.js";
import newsRouter from "./routes/Home/news.js";
import formRouter from "./routes/ContactUs/form.js";
import testimonyRouter from "./routes/Home/testimony.js";
import internationalVisitRouter from "./routes/Home/internationalVisit.js";
import reportsRouter from "./routes/MPReport/reports.js";
import politicsRouter from "./routes/politics/politics.js";
import parliamentQuestionsRouter from "./routes/politics/parliamentQuestions.js";
import supplementaryQuestionRouter from "./routes/politics/SupplementaryQuestion.js";
import specialMentaionRouter from "./routes/politics/specialMention.js";
import debateSpeakRouter from "./routes/politics/debateSpeak.js";
import discussionOnGovtRouter from "./routes/politics/discussionOnGovt.js";
import committeeMembershipRouter from "./routes/politics/committeeMembership.js";
import awardsRouter from "./routes/AwardsNRecognition/awards.js";
import doctoratesRouter from "./routes/AwardsNRecognition/doctorates.js";
import membershipsRouter from "./routes/AwardsNRecognition/memberships.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());




mongoose
  .connect("mongodb+srv://arjunn881:admin@cluster0.8b9rvgn.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error);
  });


app.get("/api", (req, res) => {
  res.status(200).json("Samanta Speaks APIs");
});





//Auth APIs

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Home APIs

app.use("/api/messages", messageRouter);
app.use("/api/articles", articleRouter);
app.use("/api/news", newsRouter);
app.use("/api/testimony", testimonyRouter);
app.use("/api/internationalVisit", internationalVisitRouter);


//Politics Page APIs
app.use("/api/politics", politicsRouter);
//ParliamentQuestions APIs
app.use("/api/parliamentQuestion", parliamentQuestionsRouter);
//SupplementaryQuestion APIs
app.use("/api/supplementaryQuestion", supplementaryQuestionRouter);
//SpecialMention APIs
app.use('/api/specialMention', specialMentaionRouter)
//DebateSpeak APIs
app.use('/api/debateSpeak', debateSpeakRouter);
//DiscussionOnGovt APIs
app.use('/api/discussionOnGovt', discussionOnGovtRouter);
//Committee Membership APIs
app.use('/api/committeeMembership', committeeMembershipRouter)


//Awards & Recognition APIs
app.use('/api/awards', awardsRouter),
app.use('/api/doctorates', doctoratesRouter),
app.use('/api/memberships', membershipsRouter), 


//MP Report APIs
app.use("/api/report", reportsRouter );


//ContactUs APIs
app.use("/api/form", formRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running.......");
});
