export interface GuideStepData {
  id: string
  title: string
  action: string
  explanation: string
  images: { src: string; alt: string }[]
  tip?: string
  warning?: { heading: string; body: string }
}

// Edit this array to add, remove or reorder steps.
// Screenshots live in /public/guide — reference them by filename.
export const steps: GuideStepData[] = [
  {
    id: 'sign-in',
    title: 'Open AWS Builder Center and sign in',
    action: 'Click "Sign in" in the top-right corner.',
    explanation:
      'Go to AWS Builder Center. You\'ll land on the "Welcome home, builder" page. In the top-right corner of the page, click the "Sign in" button to begin.',
    images: [{ src: '/guide/step-01-signin-button.png', alt: 'AWS Builder Center homepage with the Sign in button highlighted in the top-right corner' }],
    tip: 'You don\'t need an AWS account already. This sign-in flow is how you create your Builder ID.',
  },
  {
    id: 'get-started',
    title: 'Choose how you want to sign up',
    action: 'Enter your email and click "Continue," or use "Continue with Google."',
    explanation:
      'On the "Get started" screen, you can either type your email address and click "Continue," or skip that and use one of the sign-in options below it — Google, Apple, GitHub or Amazon. Using an existing account (like Google) is usually the fastest way through this step.',
    images: [{ src: '/guide/step-02-get-started.png', alt: 'AWS Get started screen with an email field, a Continue button, and a Continue with Google option' }],
    tip: 'By continuing, you\'re agreeing to the AWS Customer Agreement and Privacy Notice, and this step is what creates your AWS Builder ID.',
  },
  {
    id: 'choose-account',
    title: 'Pick the Google account to continue with',
    action: 'Select the account you want to use.',
    explanation:
      'If you chose "Continue with Google," Google will ask which account you\'d like to use to continue to Amazon Web Services. Click on your account to select it.',
    images: [{ src: '/guide/step-03-choose-google-account.jpg', alt: 'Google "Choose an account" screen showing an account to sign in with, continuing to Amazon Web Services' }],
  },
  {
    id: 'google-consent',
    title: 'Allow Google to share your info with AWS',
    action: 'Review the details, then click "Continue."',
    explanation:
      'Google shows exactly what it will share with Amazon Web Services — your name, profile picture and email address. Read this, then click the "Continue" button to proceed.',
    images: [{ src: '/guide/step-04-google-consent.jpg', alt: 'Google consent screen listing the name and email that will be shared with Amazon Web Services, with a Continue button' }],
  },
  {
    id: 'redirect-back',
    title: 'You\'ll be redirected back to Builder Center',
    action: 'Wait for the page to load — no action needed here.',
    explanation:
      'After confirming with Google, you\'re brought back to builder.aws.com. This screen may appear briefly while your account finishes setting up before the profile setup step loads.',
    images: [{ src: '/guide/step-05-redirect-back.png', alt: 'Builder Center welcome page loading at builder.aws.com/start after signing in' }],
  },
  {
    id: 'alias',
    title: 'Set up your profile — choose an alias',
    action: 'Type a unique alias in the "Alias" field, then click "Continue."',
    explanation:
      'This is where you create your public handle on Builder Center. Type your alias into the field — it will appear as your profile URL (builder.aws.com/community/@youralias). Once you\'re happy with it, click "Continue."',
    images: [
      { src: '/guide/step-06-alias-empty.png', alt: 'Set up your profile screen with an empty Alias field' },
      { src: '/guide/step-06-alias-filled.png', alt: 'Set up your profile screen with the alias "aditya23" typed into the Alias field' },
    ],
    warning: {
      heading: 'Choose your alias carefully',
      body: 'The screen itself tells you: "This will be your unique handle on Builder Center. It can\'t be changed later." Take a moment before continuing — pick something you\'ll be comfortable with as your long-term Builder Center handle.',
    },
  },
  {
    id: 'be-first-to-know',
    title: '"Be the first to know" — email preferences',
    action: 'Leave the checkbox as you\'d like, then click "Continue."',
    explanation:
      'AWS asks if you\'d like to receive news about Builder Center, AWS services and related offers by email, post or telephone. There\'s a checkbox for this — it\'s up to you whether to keep it checked. Click "Continue" when you\'re ready to move on.',
    images: [{ src: '/guide/step-07-be-first-to-know.png', alt: 'Be the first to know screen with a checkbox for AWS news updates and a Continue button' }],
  },
  {
    id: 'student-question',
    title: 'Answer "Are you a student?"',
    action: 'Select "Yes" or "No," then continue.',
    explanation:
      'This screen asks whether you\'re currently enrolled in a course of study at a post-secondary institution. Choose the option that applies to you by clicking on it.',
    images: [{ src: '/guide/step-08-are-you-student.png', alt: 'Are you a student screen with Yes and No options, Yes selected' }],
  },
  {
    id: 'program-of-study',
    title: 'Add your program of study and graduation date',
    action: 'Select your program from the dropdown and enter your expected graduation date, then click "Continue."',
    explanation:
      'If you selected "Yes" to being a student, two more fields appear: a "Program of study" dropdown (for example, "Computer Science & Software Engineering") and an "Expected graduation date" field, which asks for the format YYYY/MM. Fill both in and click "Continue."',
    images: [{ src: '/guide/step-09-program-of-study.png', alt: 'Are you a student screen with Program of study dropdown and Expected graduation date field filled in' }],
  },
]

export const dashboardStep: GuideStepData = {
  id: 'dashboard',
  title: 'Land on your Builder Center home',
  action: 'Take a look around — this is your new home base.',
  explanation:
    'Once you\'re done, you land on the Builder Center home page. You\'ll see a "Getting started" checklist on the left (things like claiming your alias and choosing your interests) and your profile name in the top-right corner.',
  images: [{ src: '/guide/step-10-dashboard.png', alt: 'Builder Center home page showing a Getting started checklist at 1 of 5 completed' }],
  tip: 'The "Getting started" checklist is optional — you can explore Builder Center at your own pace.',
}

export const profileStep: GuideStepData = {
  id: 'profile',
  title: 'Find your Builder ID alias anytime',
  action: 'Click your name in the top-right corner, then "Manage profile."',
  explanation:
    'Click your name in the top-right corner of any Builder Center page to open a menu with "Manage profile," "Manage content," "Saved items" and "Sign out." Choosing "Manage profile" takes you to your profile page, where your alias is shown right under your name.',
  images: [
    { src: '/guide/step-11-profile-menu.jpg', alt: 'Profile dropdown menu open with Manage profile, Manage content, Saved items and Sign out options' },
    { src: '/guide/step-11-profile-page.png', alt: 'Builder Center profile page showing the alias underneath the profile name' },
  ],
}
