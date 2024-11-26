"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

// Notification items
let notifications = [
  {
    name: "Kevin Brown",
    description: "Thanks for your prompt response to my query. The service was excellent!",
    time: "Just now",
    icon: "🙋🏻‍♂️",
    color: "#00C9A7",
  },
  {
    name: "Sophia Miller",
    description: "I really appreciate the detailed instructions in your latest update.",
    time: "8m ago",
    icon: "📩",
    color: "#FFD700",
  },
  {
    name: "Alexander Garcia",
    description: "The new dashboard feature is fantastic! It's so much easier to navigate.",
    time: "15m ago",
    icon: "🚀",
    color: "#4CAF50",
  },
  {
    name: "Jessica Lee",
    description: "Can you please provide more clarification about the billing process?",
    time: "30m ago",
    icon: "❓",
    color: "#FF3D71",
  },
  {
    name: "David Johnson",
    description: "The webinar was insightful. Thank you for organizing it!",
    time: "1h ago",
    icon: "🎓",
    color: "#1E86FF",
  },
  {
    name: "Emily Davis",
    description: "I encountered an issue with my recent transaction. Please check.",
    time: "2h ago",
    icon: "⚠️",
    color: "#FF5722",
  },
];



// Duplicate the notifications array to create more items
notifications = Array.from({ length: 10 }, () => notifications).flat();

// Notification component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg w-10 text-center">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text- sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Main AnimatedListDemo component
export function ProjectList({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-96 flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
