import QuestionItem from "./QuestionItem"

export interface QuestionType {
    question: string,
    answer: string
}
const questions: QuestionType[] = [
    {
        question: "Does Trello offer a Premium free trial",
        answer: "We sure do. All users can enroll their Workspace in a free trial of Trello Premium. With that trial your Workspace will get access to create unlimited Trello boards, automate as much as you'd like, take advantage of Timeline, Dashboard, and other new views, and much more!"
    },
    {
        question: "Do you offer any discounted plans?",
        answer: "Yes! Trello offers both a non-profit community discount as well as an education discount."
    },
    {
        question: "What payment methods do you accept?",
        answer: "You can purchase a monthly or annual Trello Standard or Premium subscription with any major credit card. We offer more options for Enterprise customers, if you’re interested in learning more about Trello Enterprise contact our sales team."
    },
    {
        question: "How do I cancel my Trello Standard or Premium subscription?",
        answer: "If you aren’t 100% satisfied with Trello Standard or Premium you may downgrade at any time. When a team downgrades from Standard or Premium, it retains its Standard or Premium features and unlimited boards until the end of its prepaid service period. At the end of its prepaid service period, it becomes a free Trello Workspace that can hold 10 boards. Learn more about canceling your Standard or Premium subscription here."
    },
    {
        question: "How are users counted towards billing?",
        answer: "A Trello user who is added as a member to a Workspace—either as a normal member or as a team admin—is considered a billable team member that is included in the cost of Trello Standard or Premium."
    },
    {
        question: "Is there an on-premises version of Trello?",
        answer: "Trello is proudly a cloud-only product. We offer access via the web, desktop, and our awesome mobile apps."
    }, {
        question: "Can I have Trello Standard or Premium just for my own account?",
        answer: "Trello Standard and Premium are designed for all teams—even teams of one! To upgrade to Standard or Premium you’ll need to create a Workspace and then upgrade that Workspace."
    }, {
        question: "How secure is Trello?",
        answer: "Trello, Inc. (“we”, “us” or “our”) is SOC2 Type 2 certified—we receive and review our data hosting providers’ SOC1 and SOC2 reports every 6 months under NDA. Trello is ISO/IEC 27001 certified which validates our information security management system (ISMS) and the implementation of our security controls. More information is available on the Atlassian Trust Management System. Trello is PCI-DSS certified. Learn more about Trello’s security protocols here."
    }
]
export default function FrequentlyAsked() {
    return (
        <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
            <div className="w-full px-4 pt-4 pb-[5rem]">
                <div className="w-full pb-[3rem]">
                    <h2 className="text-2xl md:text-[2.25rem] w-full text-center">Frequently asked question</h2>
                </div>
                <div className="w-full">
                    {
                        questions.map((question) => {
                            return <QuestionItem question={question} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}