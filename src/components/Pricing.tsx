import Link from "next/link"

const pricingItems = [
    {
        name: 'free',
        price: 0,
        priceDescription: 'Free for your whole team',
        description: 'For individuals or teams looking to organize any project.',
        button: 'Get started',
        inclusionTitle: 'inluded in free',
        inclusions: [
            'Unlimited cards',
            'Up to 10 boards per Workspace',
            'Unlimited Power-Ups per board',
            'Unlimited Storage (10MB/file',
            '2550 Workspace command runs per month',
            'Custom backgrounds & stickers',
            'Unlimited activity log',
            'Assignee and due dates',
            'iOS and Android mobile apps',
            '2-factor authentication'
        ]
    },
    {
        name: 'standard',
        price: 5,
        priceDescription: 'Per user/month if billed annually ($6 billed monthly)',
        description: 'For small teams that need to manage work and scale collaboration.',
        button: 'Sign up now',
        inclusionTitle: 'everything in free, plus',
        inclusions: [
            'Unlimited boards',
            'Advanced checklists',
            'Custom Fields',
            'Unlimited storage (250MB/file)',
            '1,000 Workspace command runs per month',
            'Single board guests',
            'Saved searches'
        ]
    },
    {
        name: 'premium',
        price: 10,
        priceDescription: 'Per user/month if billed annually ($12.50 billed monthly)',
        description: 'For teams that need to track and visualize multiple projects in several ways,including boardss, timelines, calendars, etc.',
        button: 'Try for free',
        inclusionTitle: 'everything in standard, plus',
        inclusions: [
            'Views: Calendar, Timeline, Table, Dashboard, and Map',
            'Workspace views: Table and Calendar',
            'Unlimited Workspace command runs',
            'Admin and security features',
            'Workspace-level templates',
            'Collections',
            'Observers',
            'Simple data export'
        ]
    },
    {
        name: 'enterprise',
        price: 17.50,
        priceDescription: 'Per user/month - billed annually ($210 annual price per user)',
        description: 'For organizations that need to connect work across teams with more security and controls.',
        button: 'Contact sales',
        inclusionTitle: 'everything in premium, plus',
        inclusions: [
            'Unlimited Workspaces',
            'Organization-wide permissions',
            'Organization-visible boards',
            'Public board management',
            'Multi-board guests',
            'Attachment permissions',
            'Power-Up administration',
            'Free SSO and user provisioning with Atlassian Access'
        ]
    },
]
export default function Pricing() {
    // n*4 for order
    return (
        <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-4">
                {
                    pricingItems.map((item, index) => {
                        return (
                            <>
                                <div className={`price-order-${(index + 1).toString()} 
                                        px-4 
                                        pt-6 
                                        text-base 
                                        font-medium 
                                        border-x 
                                        border-t 
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 1}
                                    >
                                        {item.name.toUpperCase()}
                                </div>
                                <div className={`price-order-${(index + 5).toString()} 
                                        px-4 
                                        pt-6 
                                        border-x 
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 5}
                                    >
                                    <h1 className="text-base mb-2">$<span className="text-5xl font-medium">{item.price}</span>USD</h1>
                                    <p className="text-xs text-[#505F79]">{item.description}</p>
                                </div>
                                <div className={`price-order-${(index + 9).toString()} 
                                        px-4 
                                        pt-6 
                                        border-x 
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 9}
                                    >
                                    {item.description}
                                </div>
                                <div className={`price-order-${(index + 13).toString()} 
                                        px-4 
                                        pt-6 
                                        border-x 
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 13}
                                    >
                                    {item.button}
                                </div>
                                <div className={`price-order-${(index + 17).toString()} 
                                        px-4 
                                        pt-6 
                                        border-x
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 17}
                                    >
                                    <div className="
                                        w-full
                                        lg:border-t
                                        lg:pt-5
                                        lg:border-t-[#DFE1E6]">
                                        <h1 className="
                                            text-base
                                            font-medium
                                            mb-2">{item.inclusionTitle.toUpperCase()}</h1>
                                        <p>{item.inclusions}</p>
                                    </div>
                                </div>
                                <div className={`price-order-${(index + 21).toString()} 
                                        px-4 
                                        pt-6
                                        pb-8
                                        mb-4 
                                        border-x 
                                        border-b
                                        text-center
                                        underline
                                        text-[#0052CC]
                                        font-base
                                        ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                                    `} 
                                    key={index + 21}
                                    >
                                    {
                                        item.name === 'free' ? '' : (
                                            <Link href=''>Learn more about {item.name}</Link>
                                        )
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}