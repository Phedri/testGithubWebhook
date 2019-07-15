{
  "action": "candidate_stage_change",
  "payload": {
    "application": {
      "id": 265277,
      "rejected_at": null,
      "prospect": false,
      "status": "active",
      "applied_at": "2013-03-22T00:00:00Z",
      "last_activity_at": "2015-02-09T16:38:36Z",
      "url": "https://app.greenhouse.io/people/265772?application_id= 265277",
      "source": {
        "id": 31,
        "name": "Agency"
      },
      "credited_to": {
        "id": 15,
        "email": "ada@example.com",
        "name": "Ada Lacey",
        "employee_id": "123ABC"
      },
      "rejection_reason": null,
      "rejection_details": null,
      "current_stage": {
        "id": 71416,
        "name": "Assessment",
        "interviews": [
          {
            "id": 113101,
            "name": "Assessment",
            "status": "to_be_scheduled",
            "interview_kit": {
              "url": "https://app.greenhouse.io/guides/113153/people/265772",
              "content": "Assess their skills",
              "questions": []
            },
            "interviewers": [
              {
                "id": 2622,
                "display_name": "Carl Buddha",
                "status": "tentative"
              }
            ]
          }
        ]
      },
      "custom_fields": {
        "custom_application_field": {
          "name": "Custom Application Field",
          "type": "short_text",
          "value": "Example"
        }
      },
      "candidate": {
        "id": 265772,
        "first_name": "Giuseppe",
        "last_name": "Hurley",
        "title": "Great Person",
        "company": null,
        "created_at": "2013-10-04T01:24:44Z",
        "external_id": "241b399ce4b0fd1c84e5528d",
        "photo_url": "https://prod-heroku.s3.amazonaws.com/...",
        "url": "https://app.greenhouse.io/people/265772",
        "is_private": false,
        "can_email": true,
        "phone_numbers": [
          {
            "value": "330-281-8004",
            "type": "home"
          }
        ],
        "email_addresses": [
          {
            "value": "giuseppe.hurley@example.com",
            "type": "personal"
          }
        ],
        "addresses": [
          {
            "value": "123 Fake St.",
            "type": "home"
          }
        ],
        "website_addresses": [
          {
            "value": "ghurley.example.com",
            "type": "personal"
          }
        ],
        "social_media_addresses": [
          {
            "value": "linkedin.example.com/ghurley"
          }
        ],
        "educations": [
          {
            "school_name": "Harvard University",
            "degree": "Bachelor's Degree",
            "discipline": "Information Systems",
            "start_date": "01/01/2012",
            "end_date": "01/01/2016"
          }
        ],
        "employments": [
          {
            "company_name": "Greenhouse",
            "title": "Engineer",
            "start_date": "01/01/2012",
            "end_date": "01/01/2016"
          }
        ],
        "recruiter": {
          "id": 3128,
          "email": "alicia.flopple.3128@example.com",
          "name": "Alicia Flopple",
          "employee_id": "789GHI"
        },
        "coordinator": {
          "id": 3128,
          "email": "alicia.flopple.3128@example.com",
          "name": "Alicia Flopple",
          "employee_id": "789GHI"
        },
        "attachments": [
          {
            "filename": "resume.pdf",
            "url": "https://prod-heroku.s3.amazonaws.com/...",
            "type": "resume"
          },
          {
            "filename": "cover_letter.pdf",
            "url": "https://prod-heroku.s3.amazonaws.com/...",
            "type": "cover_letter"
          },
          {
            "filename": "portfolio.pdf",
            "url": "https://prod-heroku.s3.amazonaws.com/...",
            "type": "attachment"
          }
        ],
        "tags": ["Import from Previous ATS"],
        "custom_fields": {
          "favorite_color": {
            "name": "Favorite Color",
            "type": "short_text",
            "value": "Blue"
          }
        }
      },
      "jobs": [
        {
          "id": 3485,
          "name": "Designer",
          "requisition_id": null,
          "notes": "Digital and print",
          "job_post_id": 553282,
          "status": "open",
          "created_at": "2013-10-02T22:59:29Z",
          "opened_at": "2015-01-23T00:25:04Z",
          "closed_at": null,
          "departments": [
            {
              "id": 237,
              "name": "Community",
              "external_id": "ex-dept-1"
            }
          ],
          "offices": [
            {
              "id": 54,
              "name": "New York",
              "location": "New York, NY",
              "external_id": "ex-office-1"
            }
          ],
          "custom_fields": {
            "employment_type": {
              "name": "Employment Type",
              "type": "single_select",
              "value": "Full Time"
            }
          }
        }
      ]
    }
  }
}
