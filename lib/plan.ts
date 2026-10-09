export type TaskKey = 'dsa' | 'aptitude' | 'development' | 'interview' | 'career';
export type PlanTask = { title: string; detail: string };
export type PlanDay = { day: number; week: number; phase: string; focus: string; tasks: Record<TaskKey, PlanTask> };

export const plan: PlanDay[] = [
  {
    "day": 1,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Big-O basics",
        "detail": "Learn O(1), O(n), O(n²); trace loops by hand."
      },
      "aptitude": {
        "title": "Number system",
        "detail": "Divisibility, factors, multiples, odd/even."
      },
      "development": {
        "title": "Project audit",
        "detail": "Review your Start focus-tracking app, README, routes, and current bugs."
      },
      "interview": {
        "title": "Introduce yourself in 60 seconds.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Create a job tracker and save 5 relevant descriptions.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 2,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Array traversal",
        "detail": "Find sum, minimum, maximum, and count values."
      },
      "aptitude": {
        "title": "Simplification",
        "detail": "BODMAS and basic arithmetic."
      },
      "development": {
        "title": "Responsive hero",
        "detail": "Build a clean responsive hero and navbar."
      },
      "interview": {
        "title": "Explain HTML, CSS, and JavaScript differences.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 2–3 suitable intern/trainee roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 3,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Reverse a string",
        "detail": "Solve with a loop; then compare a two-pointer solution."
      },
      "aptitude": {
        "title": "HCF and LCM",
        "detail": "Prime factorization and word problems."
      },
      "development": {
        "title": "Mobile menu",
        "detail": "Add accessible mobile navigation and active links."
      },
      "interview": {
        "title": "Explain Big-O with a loop example.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review 3 frontend job descriptions for recurring skills.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 4,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Contains Duplicate",
        "detail": "Use a Set; compare with nested loops."
      },
      "aptitude": {
        "title": "Percentages I",
        "detail": "Convert fractions, decimals, and percentages."
      },
      "development": {
        "title": "Reusable UI",
        "detail": "Create typed Button, Input, and Card components."
      },
      "interview": {
        "title": "Explain let, const, var, scope, and hoisting.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Update résumé headline and add project links.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 5,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Valid Anagram",
        "detail": "Count character frequencies with an object or Map."
      },
      "aptitude": {
        "title": "Percentages II",
        "detail": "Increase/decrease and successive percentage change."
      },
      "development": {
        "title": "Form states",
        "detail": "Add validation, disabled, loading, and error states."
      },
      "interview": {
        "title": "Explain array vs object vs Map vs Set.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles; tailor one application.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 6,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Two Sum",
        "detail": "Try brute force, then optimize with a Map."
      },
      "aptitude": {
        "title": "Arithmetic quiz",
        "detail": "15 timed questions; write down every mistake."
      },
      "development": {
        "title": "GitHub cleanup",
        "detail": "Push code, improve README, add screenshots."
      },
      "interview": {
        "title": "Explain your project goal and users.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Check eligibility requirements before applying.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 7,
    "week": 1,
    "phase": "Foundation",
    "focus": "Foundations: Big-O, arrays and percentages",
    "tasks": {
      "dsa": {
        "title": "Weekly DSA review",
        "detail": "Redo two missed problems without looking at notes."
      },
      "aptitude": {
        "title": "Error notebook",
        "detail": "Review wrong answers; no new topic."
      },
      "development": {
        "title": "Weekly checkpoint",
        "detail": "List what works and choose next week's first task."
      },
      "interview": {
        "title": "Record a short mock interview and note 3 improvements.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review: applications, responses, and next steps.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 8,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Best Time to Buy and Sell Stock",
        "detail": "Track the minimum price and best profit so far."
      },
      "aptitude": {
        "title": "Ratio and proportion",
        "detail": "Simplify ratios and find missing values."
      },
      "development": {
        "title": "Dashboard layout",
        "detail": "Build the Start dashboard shell and page navigation."
      },
      "interview": {
        "title": "Explain props vs state.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable junior/intern roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 9,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Is Subsequence",
        "detail": "Use two pointers and explain the loop invariant."
      },
      "aptitude": {
        "title": "Direct and inverse proportion",
        "detail": "Translate word problems into equations."
      },
      "development": {
        "title": "Summary cards",
        "detail": "Create total focus, today's focus, streak, and average cards."
      },
      "interview": {
        "title": "Explain useState and controlled inputs.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Tailor résumé for a React role.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 10,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Merge Sorted Array",
        "detail": "Fill from the end to avoid overwriting values."
      },
      "aptitude": {
        "title": "Averages",
        "detail": "Simple average and missing-value questions."
      },
      "development": {
        "title": "Session history",
        "detail": "Build a session list with empty/loading states."
      },
      "interview": {
        "title": "Explain map, filter, and reduce with examples.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles and log links/dates.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 11,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Valid Palindrome",
        "detail": "Use two pointers and ignore non-alphanumeric characters."
      },
      "aptitude": {
        "title": "Weighted average",
        "detail": "Solve mixed group and replacement questions."
      },
      "development": {
        "title": "React state revision",
        "detail": "Practise useState, controlled inputs, and event handlers."
      },
      "interview": {
        "title": "Explain closures with a practical example.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Find 2 companies that hire freshers or interns.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 12,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Majority Element",
        "detail": "Explore counting and the Boyer–Moore idea."
      },
      "aptitude": {
        "title": "Profit and loss",
        "detail": "Cost price, selling price, profit/loss percentage."
      },
      "development": {
        "title": "API loading states",
        "detail": "Fetch data with loading, success, and error UI."
      },
      "interview": {
        "title": "Explain HTTP methods and status codes.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 13,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Move Zeroes",
        "detail": "Keep non-zero values in order using two pointers."
      },
      "aptitude": {
        "title": "Discounts",
        "detail": "Marked price and successive discounts."
      },
      "development": {
        "title": "Filters and sorting",
        "detail": "Add a date or status filter to session history."
      },
      "interview": {
        "title": "Explain how your dashboard gets its data.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise a 2-minute project walkthrough.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 14,
    "week": 2,
    "phase": "Foundation",
    "focus": "Hash maps, ratios and React fundamentals",
    "tasks": {
      "dsa": {
        "title": "Weekly DSA review",
        "detail": "Redo Two Sum and one array/string problem timed."
      },
      "aptitude": {
        "title": "Timed arithmetic set",
        "detail": "20 questions; review speed and accuracy."
      },
      "development": {
        "title": "Responsive review",
        "detail": "Test at mobile, tablet, and desktop widths."
      },
      "interview": {
        "title": "Mock React fundamentals aloud.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review and update tracker.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 15,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Two Sum II",
        "detail": "Use two pointers on a sorted array."
      },
      "aptitude": {
        "title": "Simple interest",
        "detail": "Principal, rate, time and interest."
      },
      "development": {
        "title": "API map",
        "detail": "Document current routes, models, and request/response shapes."
      },
      "interview": {
        "title": "Explain binary search and O(log n).",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 16,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Search Insert Position",
        "detail": "Adapt binary search to find insertion index."
      },
      "aptitude": {
        "title": "Compound interest",
        "detail": "Annual compounding and growth."
      },
      "development": {
        "title": "Session API",
        "detail": "Connect the start-session action to the backend."
      },
      "interview": {
        "title": "Explain async/await and try/catch.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Check assessment dates and required skills.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 17,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Binary Search",
        "detail": "Write iterative binary search and state its invariant."
      },
      "aptitude": {
        "title": "Time and work I",
        "detail": "Work rates and combined work."
      },
      "development": {
        "title": "End session",
        "detail": "Persist end time and calculate duration safely."
      },
      "interview": {
        "title": "Explain GET, POST, PATCH, and DELETE.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 18,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "First Bad Version (concept)",
        "detail": "Practise boundary-based binary search."
      },
      "aptitude": {
        "title": "Time and work II",
        "detail": "Efficiency, alternate days, and pipes/cisterns."
      },
      "development": {
        "title": "History API",
        "detail": "Fetch authenticated user's session history."
      },
      "interview": {
        "title": "Explain REST APIs in simple language.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Update one résumé bullet with a real project feature.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 19,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Squares of a Sorted Array",
        "detail": "Use pointers from both ends."
      },
      "aptitude": {
        "title": "Speed, distance, time",
        "detail": "Unit conversions and relative speed."
      },
      "development": {
        "title": "Validation",
        "detail": "Handle bad inputs and API errors clearly."
      },
      "interview": {
        "title": "Explain request validation on client vs server.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 20,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Maximum Average Subarray I",
        "detail": "Maintain a fixed-size sliding window."
      },
      "aptitude": {
        "title": "Trains and boats",
        "detail": "Solve common placement-style word problems."
      },
      "development": {
        "title": "MongoDB persistence",
        "detail": "Verify data survives refresh and new login."
      },
      "interview": {
        "title": "Explain controller, model, and route responsibilities.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise explaining one API.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 21,
    "week": 3,
    "phase": "Foundation",
    "focus": "Two pointers, binary search and time/work",
    "tasks": {
      "dsa": {
        "title": "Weekly DSA review",
        "detail": "Redo Binary Search and one two-pointer problem."
      },
      "aptitude": {
        "title": "Timed quant set",
        "detail": "Review the 5 slowest questions."
      },
      "development": {
        "title": "API QA",
        "detail": "Test happy paths, empty states, and errors."
      },
      "interview": {
        "title": "Project walkthrough: click through one feature end-to-end.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 22,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Running Sum of 1D Array",
        "detail": "Build a prefix sum array."
      },
      "aptitude": {
        "title": "Mixtures and alligation",
        "detail": "Understand weighted average shortcut."
      },
      "development": {
        "title": "Analytics cards",
        "detail": "Calculate today's, total, and average focus from real data."
      },
      "interview": {
        "title": "Explain sliding window.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 23,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Find Pivot Index",
        "detail": "Compare left and right sums."
      },
      "aptitude": {
        "title": "Partnership",
        "detail": "Profit share based on capital and time."
      },
      "development": {
        "title": "Streak logic",
        "detail": "Test consecutive days, missed days, and timezone boundaries."
      },
      "interview": {
        "title": "Explain prefix sums.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review project against 3 job descriptions.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 24,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Longest Substring Without Repeating Characters",
        "detail": "Use a sliding window and last-seen indices; guided is okay."
      },
      "aptitude": {
        "title": "Data interpretation: tables",
        "detail": "Read totals, percentages, and comparisons."
      },
      "development": {
        "title": "Monthly chart",
        "detail": "Build a readable monthly focus chart."
      },
      "interview": {
        "title": "Explain useEffect dependencies.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 25,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Product of Array Except Self",
        "detail": "Use prefix/suffix products; discuss division alternative."
      },
      "aptitude": {
        "title": "Data interpretation: bar charts",
        "detail": "Calculate ratios and percentage change."
      },
      "development": {
        "title": "Daily activity",
        "detail": "Show activity by day with sensible empty states."
      },
      "interview": {
        "title": "Explain authentication vs authorization.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Improve GitHub README and screenshots.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 26,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Maximum Subarray",
        "detail": "Try Kadane's algorithm after understanding brute force."
      },
      "aptitude": {
        "title": "Number series",
        "detail": "Identify common arithmetic/geometric patterns."
      },
      "development": {
        "title": "Auth edge cases",
        "detail": "Test expired session, logged-out state, and errors."
      },
      "interview": {
        "title": "Explain cookie security at a high level.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 27,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Group Anagrams",
        "detail": "Use a canonical key or character frequency."
      },
      "aptitude": {
        "title": "Mixed aptitude test",
        "detail": "25 timed questions across covered topics."
      },
      "development": {
        "title": "Deploy preview",
        "detail": "Deploy a stable preview and configure env vars safely."
      },
      "interview": {
        "title": "Explain a bug you fixed and how you tested it.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise a mock technical screen.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 28,
    "week": 4,
    "phase": "Foundation",
    "focus": "Sliding window, prefix sums and project milestone",
    "tasks": {
      "dsa": {
        "title": "Month 1 DSA checkpoint",
        "detail": "Solve 3 easy problems mixed; explain complexity."
      },
      "aptitude": {
        "title": "Month 1 aptitude review",
        "detail": "Record accuracy by topic and weakest 2 areas."
      },
      "development": {
        "title": "Milestone 1",
        "detail": "Write README, screenshots, known issues, and next steps."
      },
      "interview": {
        "title": "Month 1 mock interview and review.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Monthly review: keep, stop, start.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 29,
    "week": 5,
    "phase": "Foundation",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Valid Parentheses",
        "detail": "Use a stack; explain matching open/close symbols."
      },
      "aptitude": {
        "title": "Permutations and combinations",
        "detail": "Fundamental counting principle and nCr basics."
      },
      "development": {
        "title": "Auth audit",
        "detail": "Verify registration, login, logout, and current-user behavior."
      },
      "interview": {
        "title": "Explain stack vs queue.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 30,
    "week": 5,
    "phase": "Foundation",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Implement Queue",
        "detail": "Use an array and understand front/rear operations."
      },
      "aptitude": {
        "title": "Probability",
        "detail": "Simple events, complements, and dice/coin questions."
      },
      "development": {
        "title": "Protected pages",
        "detail": "Handle logged-out redirects and loading states."
      },
      "interview": {
        "title": "Explain JWT vs session conceptually.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Check whether role requires specific graduation year/marks.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 31,
    "week": 5,
    "phase": "Build & Interview",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Min Stack (guided)",
        "detail": "Track the current minimum alongside values."
      },
      "aptitude": {
        "title": "Syllogisms",
        "detail": "Venn diagram approach."
      },
      "development": {
        "title": "Profile settings",
        "detail": "Add safe profile editing or a simple preferences panel."
      },
      "interview": {
        "title": "Explain HTTP-only cookies and why they matter.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 32,
    "week": 5,
    "phase": "Build & Interview",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Reverse Linked List (guided)",
        "detail": "Iteratively reverse pointers."
      },
      "aptitude": {
        "title": "Blood relations",
        "detail": "Draw family trees; avoid mental guessing."
      },
      "development": {
        "title": "Session controls",
        "detail": "Support cancel/end and avoid duplicate active sessions."
      },
      "interview": {
        "title": "Explain middleware.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Prepare a short story about solving a difficult bug.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 33,
    "week": 5,
    "phase": "Build & Interview",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Middle of the Linked List",
        "detail": "Use slow and fast pointers."
      },
      "aptitude": {
        "title": "Direction sense",
        "detail": "Track turns and displacement."
      },
      "development": {
        "title": "Backend errors",
        "detail": "Standardize error responses and user-facing messages."
      },
      "interview": {
        "title": "Explain linked-list traversal complexity.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 34,
    "week": 5,
    "phase": "Build & Interview",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Linked List Cycle",
        "detail": "Detect a cycle with two pointers."
      },
      "aptitude": {
        "title": "Linear seating arrangement",
        "detail": "Use fixed positions and constraints."
      },
      "development": {
        "title": "Security review",
        "detail": "Keep secrets server-side; validate all inputs."
      },
      "interview": {
        "title": "Explain validation and error handling.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Update tracker and follow up appropriately.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 35,
    "week": 5,
    "phase": "Build & Interview",
    "focus": "Stacks, queues, linked lists and authentication",
    "tasks": {
      "dsa": {
        "title": "Weekly review",
        "detail": "Redo Valid Parentheses and one linked-list problem."
      },
      "aptitude": {
        "title": "Timed reasoning quiz",
        "detail": "20 questions and error review."
      },
      "development": {
        "title": "Auth QA",
        "detail": "Test expired login, wrong password, and refresh behavior."
      },
      "interview": {
        "title": "Mock backend/auth interview.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 36,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Recursive factorial",
        "detail": "Identify base case and recursive case."
      },
      "aptitude": {
        "title": "Statements and conclusions",
        "detail": "Separate what is stated from what is assumed."
      },
      "development": {
        "title": "Unit tests",
        "detail": "Test pure utility functions and streak calculations."
      },
      "interview": {
        "title": "Explain recursion and base cases.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 37,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Maximum Depth of Binary Tree (guided)",
        "detail": "Use DFS recursion and return subtree depth."
      },
      "aptitude": {
        "title": "Seating arrangements",
        "detail": "Solve linear arrangements with a table."
      },
      "development": {
        "title": "Component tests",
        "detail": "Test key UI behavior and form validation."
      },
      "interview": {
        "title": "Explain DFS vs BFS.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review test and debugging stories for interviews.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 38,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Invert Binary Tree (guided)",
        "detail": "Swap left and right children recursively."
      },
      "aptitude": {
        "title": "Circular arrangements",
        "detail": "Fix one person as an anchor."
      },
      "development": {
        "title": "API error paths",
        "detail": "Test invalid inputs, unauthorized requests, and missing data."
      },
      "interview": {
        "title": "Explain unit vs integration testing.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 39,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Same Tree",
        "detail": "Compare node values and child subtrees."
      },
      "aptitude": {
        "title": "Clocks",
        "detail": "Angles and relative movement basics."
      },
      "development": {
        "title": "Accessibility",
        "detail": "Keyboard navigation, labels, focus, contrast."
      },
      "interview": {
        "title": "Explain frontend vs backend validation.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Improve one project section of résumé.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 40,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Binary Tree Level Order Traversal (guided)",
        "detail": "Use a queue for BFS."
      },
      "aptitude": {
        "title": "Calendars",
        "detail": "Odd days and day-of-week reasoning."
      },
      "development": {
        "title": "Mobile QA",
        "detail": "Test responsive layout and touch targets."
      },
      "interview": {
        "title": "Explain TypeScript interfaces and union types.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 41,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Climbing Stairs",
        "detail": "Start with recurrence, then memoization/tabulation."
      },
      "aptitude": {
        "title": "Verbal: sentence correction",
        "detail": "Subject-verb agreement and tenses."
      },
      "development": {
        "title": "Seed/demo instructions",
        "detail": "Document how to run and test the app."
      },
      "interview": {
        "title": "Explain a test that caught a bug.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise explaining tests you wrote.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 42,
    "week": 6,
    "phase": "Build & Interview",
    "focus": "Recursion, trees and testing",
    "tasks": {
      "dsa": {
        "title": "Weekly review",
        "detail": "Explain recursion, DFS, BFS, and complexity."
      },
      "aptitude": {
        "title": "Timed mixed test",
        "detail": "Review reasoning and verbal errors."
      },
      "development": {
        "title": "Testing milestone",
        "detail": "Fix highest-impact defects from test results."
      },
      "interview": {
        "title": "Mock project walkthrough without notes.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 43,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Merge Intervals (guided)",
        "detail": "Sort intervals, then merge overlaps."
      },
      "aptitude": {
        "title": "Probability revision",
        "detail": "Solve mixed event/complement questions."
      },
      "development": {
        "title": "Frontend deployment",
        "detail": "Deploy frontend and set production environment variables."
      },
      "interview": {
        "title": "Explain CORS.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 44,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Insert Interval (guided)",
        "detail": "Insert and merge overlapping ranges."
      },
      "aptitude": {
        "title": "Data sufficiency",
        "detail": "Decide whether information is enough."
      },
      "development": {
        "title": "Backend deployment",
        "detail": "Deploy API and connect database securely."
      },
      "interview": {
        "title": "Explain environment variables.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Add live demo and GitHub links to résumé.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 45,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Sort an Array",
        "detail": "Use JavaScript sort with a numeric comparator."
      },
      "aptitude": {
        "title": "Reading comprehension",
        "detail": "Find main idea, inference, and supporting detail."
      },
      "development": {
        "title": "CORS and config",
        "detail": "Check allowed origins and secrets in environment settings."
      },
      "interview": {
        "title": "Explain sorting complexity at a high level.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 46,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Kth Largest Element",
        "detail": "Start with sorting; understand heap/quickselect later."
      },
      "aptitude": {
        "title": "Fill in the blanks",
        "detail": "Grammar and vocabulary in context."
      },
      "development": {
        "title": "Production smoke test",
        "detail": "Test signup/login, core feature, and analytics."
      },
      "interview": {
        "title": "Explain API security basics.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Check links and mobile presentation.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 47,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Top K Frequent Elements (guided)",
        "detail": "Count frequencies and select frequent values."
      },
      "aptitude": {
        "title": "Para jumbles",
        "detail": "Find opening sentence and logical links."
      },
      "development": {
        "title": "README architecture",
        "detail": "Add features, stack, setup, screenshots, and demo."
      },
      "interview": {
        "title": "Explain one architecture trade-off.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 48,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Daily Temperatures (guided)",
        "detail": "Use a monotonic stack idea."
      },
      "aptitude": {
        "title": "Mixed timed test",
        "detail": "30 questions; record time per section."
      },
      "development": {
        "title": "Basic security review",
        "detail": "Review validation, rate limits where appropriate, and secret handling."
      },
      "interview": {
        "title": "Explain deployment and production debugging.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise a 2-minute project pitch.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 49,
    "week": 7,
    "phase": "Build & Interview",
    "focus": "Sorting, intervals, deployment and security",
    "tasks": {
      "dsa": {
        "title": "Project milestone review",
        "detail": "Run a timed easy set and review deployment."
      },
      "aptitude": {
        "title": "Error notebook",
        "detail": "Revise recurring mistakes."
      },
      "development": {
        "title": "Milestone 2",
        "detail": "Tag a stable release and list known limitations."
      },
      "interview": {
        "title": "Mock technical screen.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 50,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Flood Fill (guided)",
        "detail": "Use DFS/BFS to visit connected cells."
      },
      "aptitude": {
        "title": "Synonyms and antonyms",
        "detail": "Build vocabulary from context."
      },
      "development": {
        "title": "AI feature plan",
        "detail": "Define a useful weekly focus-summary feature and expected output."
      },
      "interview": {
        "title": "Explain BFS/DFS at a high level.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 51,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Number of Islands (guided)",
        "detail": "Count connected components in a grid."
      },
      "aptitude": {
        "title": "Sentence correction",
        "detail": "Grammar and common error spotting."
      },
      "development": {
        "title": "AI UI with mock data",
        "detail": "Build loading, success, and error states before connecting an API."
      },
      "interview": {
        "title": "Explain dynamic programming and overlapping subproblems.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Search for frontend roles that mention AI integration as a plus.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 52,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Min Cost Climbing Stairs (guided)",
        "detail": "Define state, transition, and base cases."
      },
      "aptitude": {
        "title": "Para jumbles",
        "detail": "Practice logical flow."
      },
      "development": {
        "title": "Secure server endpoint",
        "detail": "Call AI provider from backend; never expose API keys in browser."
      },
      "interview": {
        "title": "Explain how a frontend calls a backend AI endpoint.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 53,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "House Robber (guided)",
        "detail": "Compare taking current vs skipping current."
      },
      "aptitude": {
        "title": "Reading comprehension",
        "detail": "Timed passage and question set."
      },
      "development": {
        "title": "Input validation",
        "detail": "Limit input size and validate the data sent to the model."
      },
      "interview": {
        "title": "Explain API key safety.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Update README with AI feature and privacy notes.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 54,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Coin Change (intro)",
        "detail": "Understand DP state and transitions; focus on one example."
      },
      "aptitude": {
        "title": "Data interpretation mixed",
        "detail": "Tables, bar charts, percentages."
      },
      "development": {
        "title": "Connect summary UI",
        "detail": "Display a clearly labeled AI-generated weekly summary."
      },
      "interview": {
        "title": "Explain timeouts, rate limits, and error fallback.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 55,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Review Top K Frequent Elements",
        "detail": "Explain counting and selection options."
      },
      "aptitude": {
        "title": "Verbal + DI timed set",
        "detail": "Review accuracy and pacing."
      },
      "development": {
        "title": "Fallback and privacy",
        "detail": "Handle rate limits/errors; avoid sending unnecessary personal data."
      },
      "interview": {
        "title": "Demo the AI feature and discuss limitations.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise explaining AI feature architecture.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 56,
    "week": 8,
    "phase": "Build & Interview",
    "focus": "Graphs, dynamic programming and a practical AI feature",
    "tasks": {
      "dsa": {
        "title": "Weekly review",
        "detail": "Write one paragraph explaining a DP problem."
      },
      "aptitude": {
        "title": "Aptitude review",
        "detail": "Choose two weakest topics for revision."
      },
      "development": {
        "title": "AI feature QA",
        "detail": "Test success/failure and document setup requirements."
      },
      "interview": {
        "title": "Mock project interview including AI integration. ",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 57,
    "week": 9,
    "phase": "Build & Interview",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Group Anagrams",
        "detail": "Use a canonical key or frequency signature."
      },
      "aptitude": {
        "title": "Percentages and ratios revision",
        "detail": "Mixed word problems."
      },
      "development": {
        "title": "UX polish",
        "detail": "Improve spacing, typography, and visual consistency."
      },
      "interview": {
        "title": "Revise closures, event loop, and promises.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 58,
    "week": 9,
    "phase": "Build & Interview",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "3Sum (guided)",
        "detail": "Sort, then use two pointers and skip duplicates."
      },
      "aptitude": {
        "title": "Profit/loss and averages revision",
        "detail": "Timed calculations."
      },
      "development": {
        "title": "Analytics filters",
        "detail": "Add a useful date range or activity filter."
      },
      "interview": {
        "title": "Revise React state, effects, keys, and memoization basics.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Tailor résumé to one target job.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 59,
    "week": 9,
    "phase": "Build & Interview",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Container With Most Water (guided)",
        "detail": "Move the pointer at the shorter height."
      },
      "aptitude": {
        "title": "Time/work revision",
        "detail": "Combined work and efficiency."
      },
      "development": {
        "title": "Loading and empty states",
        "detail": "Make every major screen understandable with no data."
      },
      "interview": {
        "title": "Explain data flow from database to UI.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 60,
    "week": 9,
    "phase": "Build & Interview",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Longest Consecutive Sequence",
        "detail": "Use a Set and start only at sequence beginnings."
      },
      "aptitude": {
        "title": "Speed/distance revision",
        "detail": "Relative speed and unit conversion."
      },
      "development": {
        "title": "Performance pass",
        "detail": "Remove obvious unnecessary re-renders and large unused code."
      },
      "interview": {
        "title": "Explain stack patterns and complexity.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Ask a peer to review project/readme if possible.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 61,
    "week": 9,
    "phase": "Assess & Apply",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Subarray Sum Equals K (guided)",
        "detail": "Learn prefix sums plus frequency map."
      },
      "aptitude": {
        "title": "Logical reasoning mixed",
        "detail": "Series, relations, directions, syllogisms."
      },
      "development": {
        "title": "Accessibility pass",
        "detail": "Keyboard, labels, focus, and contrast."
      },
      "interview": {
        "title": "Explain a UI performance choice.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 62,
    "week": 9,
    "phase": "Assess & Apply",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Mixed easy set",
        "detail": "Choose two easy problems from previously covered patterns."
      },
      "aptitude": {
        "title": "30-question timed quiz",
        "detail": "Track accuracy and time."
      },
      "development": {
        "title": "Full regression",
        "detail": "Test core flows on mobile and desktop."
      },
      "interview": {
        "title": "Give a 2-minute project demo.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Practise a project deep dive.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 63,
    "week": 9,
    "phase": "Assess & Apply",
    "focus": "Mixed patterns and project polish",
    "tasks": {
      "dsa": {
        "title": "Timed DSA checkpoint",
        "detail": "Solve 3 mixed easy problems; review every miss."
      },
      "aptitude": {
        "title": "Review",
        "detail": "Pick two weakest topics for next week."
      },
      "development": {
        "title": "Release candidate",
        "detail": "Deploy latest version and verify all links."
      },
      "interview": {
        "title": "Mock frontend/full-stack interview.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 64,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Search in Rotated Sorted Array (guided)",
        "detail": "Identify the sorted half in each step."
      },
      "aptitude": {
        "title": "Number system + simplification",
        "detail": "Timed revision."
      },
      "development": {
        "title": "MongoDB revision",
        "detail": "Review schemas, references, queries, and indexes."
      },
      "interview": {
        "title": "Explain promises and the event loop.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 65,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Daily Temperatures redo",
        "detail": "Implement stack approach without notes."
      },
      "aptitude": {
        "title": "Mixtures + partnership",
        "detail": "Mixed practice."
      },
      "development": {
        "title": "REST revision",
        "detail": "Review status codes, validation, and errors."
      },
      "interview": {
        "title": "Explain MongoDB schema design and indexes.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Check eligibility and assessment deadlines.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 66,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Reverse Linked List redo",
        "detail": "Write pointer updates and explain them."
      },
      "aptitude": {
        "title": "Syllogisms + seating",
        "detail": "Reasoning set."
      },
      "development": {
        "title": "Async JavaScript",
        "detail": "Review promises, event loop, async/await."
      },
      "interview": {
        "title": "Explain unit vs integration tests.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 67,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Valid Anagram redo timed",
        "detail": "Use frequency counting."
      },
      "aptitude": {
        "title": "Verbal ability revision",
        "detail": "Grammar and reading."
      },
      "development": {
        "title": "TypeScript revision",
        "detail": "Interfaces, unions, generics, narrowing."
      },
      "interview": {
        "title": "Explain TypeScript narrowing and generics basics.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Follow up on suitable prior applications where appropriate.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 68,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Two Sum redo timed",
        "detail": "Compare brute force and Map solution."
      },
      "aptitude": {
        "title": "Timed aptitude sectional test",
        "detail": "Simulate the expected company pattern."
      },
      "development": {
        "title": "Refactor one component",
        "detail": "Improve readability without breaking behavior."
      },
      "interview": {
        "title": "Explain a challenging bug and debugging steps.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 3 roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 69,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Binary Search redo timed",
        "detail": "Handle boundaries and off-by-one errors."
      },
      "aptitude": {
        "title": "Review wrong answers",
        "detail": "Redo missed questions without seeing solutions."
      },
      "development": {
        "title": "Project walkthrough",
        "detail": "Explain auth, data model, API, UI, and deployment."
      },
      "interview": {
        "title": "Mock technical screen with one coding problem.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Prepare STAR stories: challenge, learning, teamwork.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 70,
    "week": 10,
    "phase": "Assess & Apply",
    "focus": "Backend, JavaScript and technical interview revision",
    "tasks": {
      "dsa": {
        "title": "Mixed assessment",
        "detail": "Choose 3 topics; review complexity and edge cases."
      },
      "aptitude": {
        "title": "Weekly review",
        "detail": "Make a short list of remaining weaknesses."
      },
      "development": {
        "title": "Fix top 5 issues",
        "detail": "Prioritize defects that affect user experience."
      },
      "interview": {
        "title": "Review mock and write improvement actions.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 71,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Timed arrays/strings set",
        "detail": "Two easy problems in 45 minutes, then review."
      },
      "aptitude": {
        "title": "Timed arithmetic set",
        "detail": "Use the target employer's format if known."
      },
      "development": {
        "title": "Build from a written requirement",
        "detail": "Create a small feature without following a tutorial."
      },
      "interview": {
        "title": "Explain requirements and edge cases before coding.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 72,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Hash map/two-pointer set",
        "detail": "Solve two familiar problems without notes."
      },
      "aptitude": {
        "title": "Timed logical reasoning",
        "detail": "Focus on accuracy before speed."
      },
      "development": {
        "title": "Test edge cases",
        "detail": "Write down expected behavior before coding."
      },
      "interview": {
        "title": "Talk through your DSA approach aloud.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles; track every link.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 73,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Binary search/sliding window",
        "detail": "Choose one from each pattern."
      },
      "aptitude": {
        "title": "Timed data interpretation",
        "detail": "Practice chart/table questions."
      },
      "development": {
        "title": "Review responsive design",
        "detail": "Check common screen widths and keyboard use."
      },
      "interview": {
        "title": "Mock React hooks questions.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 74,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Stack/queue/tree review",
        "detail": "Redo one previously missed problem."
      },
      "aptitude": {
        "title": "Timed verbal ability",
        "detail": "Reading, grammar, and sentence order."
      },
      "development": {
        "title": "Review deployment",
        "detail": "Verify environment configuration and logs."
      },
      "interview": {
        "title": "Mock API/backend questions.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 75,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Weakest pattern day",
        "detail": "Pick two easy problems in your weakest pattern."
      },
      "aptitude": {
        "title": "Full mixed test",
        "detail": "40 questions if appropriate for the target test."
      },
      "development": {
        "title": "README and demo",
        "detail": "Make setup steps reproducible."
      },
      "interview": {
        "title": "Practice behavioral stories with concrete examples.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 76,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Mock coding assessment",
        "detail": "Time yourself; prioritize correctness and explanation."
      },
      "aptitude": {
        "title": "Review and retake",
        "detail": "Redo only incorrect questions."
      },
      "development": {
        "title": "Project demo rehearsal",
        "detail": "Show problem, features, architecture, trade-offs."
      },
      "interview": {
        "title": "Full mock interview and recording.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review application funnel and follow-ups.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 77,
    "week": 11,
    "phase": "Assess & Apply",
    "focus": "Timed assessments and targeted applications",
    "tasks": {
      "dsa": {
        "title": "Assessment review",
        "detail": "Classify errors: concept, implementation, edge case, or time."
      },
      "aptitude": {
        "title": "Weekly review",
        "detail": "Set next week's target based on scores."
      },
      "development": {
        "title": "Fix mock feedback",
        "detail": "Improve the two highest-impact issues."
      },
      "interview": {
        "title": "Review recording and pick 3 improvements.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 78,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Weakest topic: easy problem 1",
        "detail": "Solve with notes only if needed; then re-code without notes."
      },
      "aptitude": {
        "title": "Weakest quant topic",
        "detail": "10–15 targeted questions."
      },
      "development": {
        "title": "Architecture polish",
        "detail": "Clarify folders, naming, and reusable components."
      },
      "interview": {
        "title": "Explain one difficult project decision.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 79,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Weakest topic: easy problem 2",
        "detail": "Explain brute force, optimized idea, and complexity."
      },
      "aptitude": {
        "title": "Weakest reasoning topic",
        "detail": "10–15 targeted questions."
      },
      "development": {
        "title": "Error/empty/loading audit",
        "detail": "Test every major screen."
      },
      "interview": {
        "title": "JavaScript output prediction and fundamentals.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 80,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Arrays/hash maps mixed",
        "detail": "Two problems; track time and mistakes."
      },
      "aptitude": {
        "title": "Mixed timed section",
        "detail": "Track accuracy and time."
      },
      "development": {
        "title": "Security/privacy check",
        "detail": "Remove secrets from Git history if exposed; rotate any leaked keys."
      },
      "interview": {
        "title": "React and TypeScript rapid-fire questions.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 81,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Two pointers/binary search mixed",
        "detail": "Two problems; check boundary cases."
      },
      "aptitude": {
        "title": "Verbal + DI",
        "detail": "One passage and one chart set."
      },
      "development": {
        "title": "Record project demo",
        "detail": "Keep it concise and show a complete user flow."
      },
      "interview": {
        "title": "Explain your architecture end-to-end.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 82,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Stacks/trees/DP basics",
        "detail": "One familiar problem and one guided review."
      },
      "aptitude": {
        "title": "Full mixed test",
        "detail": "Use a realistic time limit."
      },
      "development": {
        "title": "Résumé bullets",
        "detail": "Describe real features and outcomes honestly."
      },
      "interview": {
        "title": "Practice self-introduction and project pitch.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 83,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Redo 3 old misses",
        "detail": "Don't add new topics; focus on retention."
      },
      "aptitude": {
        "title": "Error notebook review",
        "detail": "Redo wrong answers without hints."
      },
      "development": {
        "title": "Final QA",
        "detail": "Test sign-up/login, primary flows, mobile, and deployed links."
      },
      "interview": {
        "title": "Full mock interview.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review responses and assessment feedback.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 84,
    "week": 12,
    "phase": "Assess & Apply",
    "focus": "Weak areas, project polish and interview practice",
    "tasks": {
      "dsa": {
        "title": "Mock interview",
        "detail": "Solve one problem and explain it aloud."
      },
      "aptitude": {
        "title": "Weekly review",
        "detail": "Set score target for final week."
      },
      "development": {
        "title": "Release",
        "detail": "Publish a stable version and list known limitations."
      },
      "interview": {
        "title": "Review and repeat weak answers.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Weekly review.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 85,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Redo Two Sum and Contains Duplicate",
        "detail": "Solve both without notes and state complexity."
      },
      "aptitude": {
        "title": "Arithmetic mixed set",
        "detail": "Percentages, ratios, averages, profit/loss."
      },
      "development": {
        "title": "Portfolio polish",
        "detail": "Check all links, mobile layout, and project descriptions."
      },
      "interview": {
        "title": "Mock JavaScript fundamentals.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 86,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Redo Valid Anagram and Stock",
        "detail": "Explain frequency counting and running minimum."
      },
      "aptitude": {
        "title": "Reasoning mixed set",
        "detail": "Series, syllogisms, seating, directions."
      },
      "development": {
        "title": "Final feature fix",
        "detail": "Fix one high-impact issue only."
      },
      "interview": {
        "title": "Mock React fundamentals.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 87,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Redo Binary Search and Move Zeroes",
        "detail": "Focus on boundaries and in-place updates."
      },
      "aptitude": {
        "title": "Timed aptitude section",
        "detail": "Use target company format if known."
      },
      "development": {
        "title": "Deployment verification",
        "detail": "Check production URLs, env vars, and core flows."
      },
      "interview": {
        "title": "Mock backend/API fundamentals.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 88,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Redo Valid Parentheses and Reverse List",
        "detail": "Explain stack and pointer approaches."
      },
      "aptitude": {
        "title": "Verbal + DI set",
        "detail": "Practice accuracy and pacing."
      },
      "development": {
        "title": "README final pass",
        "detail": "Setup, stack, features, screenshots, limitations."
      },
      "interview": {
        "title": "Project deep dive and behavioral questions.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 89,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Mixed DSA mock",
        "detail": "Choose 3 familiar problems and explain aloud."
      },
      "aptitude": {
        "title": "Full aptitude mock",
        "detail": "Simulate a realistic assessment."
      },
      "development": {
        "title": "Prepare project explanation",
        "detail": "Problem, decisions, data model, API, trade-offs."
      },
      "interview": {
        "title": "Full mock interview.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Apply to 4 suitable roles.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  },
  {
    "day": 90,
    "week": 13,
    "phase": "Assess & Apply",
    "focus": "Final consolidation and next-step planning",
    "tasks": {
      "dsa": {
        "title": "Review all mistake notes",
        "detail": "Pick patterns to continue for the next month."
      },
      "aptitude": {
        "title": "Review incorrect answers",
        "detail": "Redo mistakes and record progress."
      },
      "development": {
        "title": "Next 30-day roadmap",
        "detail": "Choose priorities from interviews and skill gaps."
      },
      "interview": {
        "title": "Review notes and celebrate progress.",
        "detail": "Practise aloud; write down anything you could not explain clearly."
      },
      "career": {
        "title": "Review applications, callbacks, and follow-ups.",
        "detail": "Log company, role, date, eligibility, link, and next action. Prioritize relevant fresher/intern roles."
      }
    }
  }
];
