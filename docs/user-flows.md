
# MyPledge User Flows

This page documents the various user flows in the **MyPledge** app. Each flow is represented as a flowchart, and important notes are provided using admonitions.



## Table of Contents

- [User Setup Related Flows](#user-setup-related-flows)
  - [Guest Flow](#guest-flow)
  - [Sign Up Flow](#sign-up-flow)
  - [Log In Flow](#log-in-flow)
  - [Reset Password Flow](#reset-password-flow)
  - [Returning User Flow](#returning-user-flow)
- [Homescreen Related Flows](#homescreen-related-flows)
- [Goals Flows](#goals-flows)
- [Saving Plans Flows](#saving-plans-flows)
- [Profile Flows](#profile-flows)



## User Setup Related Flows

### Introduction

A new user is greeted by both the **Launch Screen** and the **Splash Screen**. The splash screen displays three buttons:
- **Log In**
- **Register**
- **Continue as Guest**

Each button leads to a different flow. Below are the detailed flows.

### Guest Flow

```mermaid
flowchart LR
    A(["Splash Screen"]) --> B(["Onboarding Carousel (9 Items)"])
    B --> C(["Partners & Sponsors Screen"])
    C --> D(["Tap Skip Button"])
    D --> A
```



!!! note "Note"
    The individual list components holding the sponsors, when tapped, link to external websites of these sponsors.



### Sign Up Flow

```mermaid
flowchart TD
    A(["Splash Screen"]) --> B(["Tap 'Register'"])
    B --> C(["Sign Up Screen (Input: Name, Number [validated with country code +256], Email [must include '@'])"])
    C --> D(["Create Password Screen (Password: Minimum 4 characters)"])
    D --> E(["Account Created Successfully Screen (Toggle Newsletter Option)"])
    E --> F(["Enable Passkeys Screen (Options: Enable or Skip)"])
    F -- "Tap Enable" --> G(["Passkey Setup Process (See Integrating Passkeys docs)"])
    F -- "Tap Skip" --> H(["Onboarding Carousel"])
    H --> I(["Sponsors Screen"])
```

!!! note "Note"
    The onboarding carousel is scrollable by the user (swipe left/right) instead of only using buttons.



### Adding Earning Frequency (Post Sign-Up)

At the end of the onboarding carousel in the sign up flow, users are directed to add their earning frequency.

``` mermaid
flowchart TD
    A(["Sponsors Screen"])
    A --> B(["How Often Do You Save? (Options: Daily, Weekly, Monthly – multiple selections allowed)"])
    B --> C(["Tap Continue"])
    C --> D(["How Much Do You Earn per Selected Option"])
    D --> E(["Homescreen"])
```



### Log In Flow

``` mermaid
flowchart LR
    A(["Splash Screen"])
    A --> B(["Tap 'Log In'"])
    B --> C(["Log In Screen"])
    C --> D(["Enter Credentials"])
    D --> E(["Log In Successful"])
    E --> F(["Homescreen"])
```


### Reset Password Flow

``` mermaid
flowchart TD
    A(["Log In Screen"])
    A --> B(["Tap 'Forgot Password'"])
    B --> C(["Reset Password Request Screen"])
    C --> D(["Submit Email/Phone"])
    D --> E(["Reset Link/OTP Sent"])
    E --> F(["Reset Password Screen"])
    F --> G(["Password Reset Successful"])
    G --> H(["Log In Screen"])
```


### Returning User Flow

``` mermaid
flowchart LR
    A(["Splash Screen"])
    A --> B(["Tap 'Returning User'"])
    B --> C(["Log In Screen"])
    C --> D(["Enter Credentials"])
    D --> E(["Log In Successful"])
    E --> F(["Homescreen"])
```



## Homescreen Related Flows

*Documentation coming soon…*



## Goals Flows

*Documentation coming soon…*



## Saving Plans Flows

*Documentation coming soon…*



## Profile Flows

*Documentation coming soon…*
