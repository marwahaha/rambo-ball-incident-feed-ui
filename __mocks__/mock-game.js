export default function mockGame() {
    return {
        id: '41a62df6-2fd2-465b-89c9-d06c15a4ffdb',
        homeTeam: {
            name: 'Headphone United',
            score: 1
        },
        awayTeam: {
            name: 'Speakers City',
            score: 0
        },
        incidents: [
            {
                id: '3896af84-1886-48e3-b396-c5b1592151b1',
                type: 'GOAL_HOME',
                timestamp: 1547824682739
            },
            {
                id: 'b72a9ebd-721c-49fa-aaef-45ea710ec87d',
                type: 'KICK_OFF',
                timestamp: 1547824682739
            }
        ]
    }
}