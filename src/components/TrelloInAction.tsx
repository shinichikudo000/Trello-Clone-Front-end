'use client'

const card = [
    {
        name: 'Project management',
        color: '#FF7452',
        description: 'Keep tasks in order. deadlines on track, and team members aligned with Trello',
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/5Oc1c9iIDmXtUFHs0uWuLQ/cef21b3212ac080d9d0adad649dc31e9/icon-content-folder_2x.png'
    }, 
    {
        name: 'Meetings',
        color: '#2684FF',
        description: 'Empower your team meetings to be more productive, empowering, and dare we say-fun.',
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/5j0J5BEzFktzLYnsszcJWc/be9270f9ea1e9bb3c69a799e54ef9fea/icon-object-megaphone_2x.png'
    },
    {
        name: 'Onboarding',
        color: '#57D9A3',
        description: "Onboarding to a new company or project is a snap with Trello's visual layout of to-do's, resources, and progress tracking.",
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/5JwPiAFuOJCWEdYiTqlfs3/ca86f7f918d09a1782284ba4578a28ec/icon-object-leaf_2x.png'
    },
    {
        name: 'Task management',
        color: '#FFC400',
        description: "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team's projects a cohesive success  every time.",
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/4Mgm4SG6P6bD673rMtNpXP/9f8798510480b30d296550be747b9624/icon-content-checklists_2x.png'
    },
    {
        name: 'Brainstorming',
        color: '#00C7E5',
        description: "Unleash your team's creativity and keep ideals visible, collborative, and actionable.",
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/x2AI5JZPTDVY7BxKbvClM/dc65b20bf0914caa72bcaf2ddbb05d9b/UseCasesBrainstorming.svg'
    },
    {
        name: 'Resource hub',
        color: '#F99CDB',
        description: "Save time with a well-designed hub that helps teams find information easily and quickly.",
        image: 'https://images.ctfassets.net/rz1oowkt5gyp/5rv4eidOfMf1vdEzVpHNlA/bb102f380f9cfd3d1761858d8910963d/icon-object-book_2x.png'
    }
]
export default function TrelloInAction() {
    return ( 
        <section className="mt-12">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                <div className="w-full flex justify-start items-start">
                    <div className="text-wrap w-full md:max-w-[60%] p-4">
                            <h3 className="text-base font-medium mb-2">TRELLO IN ACTION</h3>
                            <h1 className="text-2xl md:text-4xl pb-2 md:pb-4 mb-2">Workflows for any project, big or small</h1>
                    </div>
                </div>
                <div className="w-full flex overflow-x-visible">
                    {
                        card.map((item, index) => {
                            return  <div key={index} className="min-w-[83.333%] lg:min-w-[33.333%] p-4">
                                        <div className="h-12 w-full rounded-t-md shadow-cardShadow" style={{backgroundColor: item.color}}></div>
                                        <div className="relative w-full pt-9 px-6 pb-6 shadow-cardShadow bg-white rounded-b-md h-[calc(100%-3rem)]">
                                            <h2 className="text-xl md:text-2xl font-medium mb-2">{item.name}</h2>
                                            <p className="text-base">{item.description}</p>
                                            <div className="absolute left-4 top-[-1.5rem] w-12 h-12 bg-white p-2 rounded-md">
                                                <img src={item.image} alt={item.name} className="object-contain"/>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}