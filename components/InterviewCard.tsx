import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DisplayTechIcons from "./DisplayTechIcons";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";

// Initialize dayjs plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const InterviewCard = async ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const currentUser = await getCurrentUser();
  const isOwnInterview = currentUser?.id === userId;
  
  // Only fetch feedback if it's the user's own interview
  const feedback = isOwnInterview && userId && id ? 
    await getFeedbackByInterviewId({ interviewId: id, userId }) : null;
  
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  
  // Safer date formatting with error handling
  let formattedDate = "N/A";
  try {
    const dateToFormat = feedback?.createdAt || createdAt;
    if (dateToFormat) {
      // Ensure we're working with UTC dates to avoid timezone issues
      formattedDate = dayjs(dateToFormat).utc().format("MMM D, YYYY");
    } else {
      formattedDate = dayjs().utc().format("MMM D, YYYY");
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    // Fallback to current date if there's an error
    formattedDate = dayjs().utc().format("MMM D, YYYY");
  }

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          <h3 className="mt-5 capitalize">{role} Interview</h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{isOwnInterview ? (feedback?.totalScore || "---") : "---"}/100</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            {isOwnInterview 
              ? (feedback?.finalAssessment || "You have not taken the interview yet. Take it now to improve your skills")
              : "Take this interview to practice your skills"}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />

          <Button className="btn-primary" asChild>
            <Link
              href={isOwnInterview && feedback ? `/interview/${id}/feedback` : `/interview/${id}`}
            >
              {isOwnInterview && feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
