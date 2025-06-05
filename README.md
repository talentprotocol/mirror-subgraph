# Mirror Subgraph

A subgraph for indexing Mirror Protocol events on Base network. This subgraph tracks Mirror's clone deployments and writing edition purchases.

## Overview

This subgraph indexes events from the Mirror Protocol on Base network, specifically focusing on:
- Clone deployments
- Writing edition purchases

## Prerequisites

- Node.js
- Yarn
- Docker and Docker Compose (for local development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mirror-subgraph.git
cd mirror-subgraph
```

2. Install dependencies:
```bash
yarn install
```

## Development

### Local Development

1. Start a local Graph Node:
```bash
docker-compose up -d
```

2. Create a local subgraph:
```bash
yarn create-local
```

3. Deploy the subgraph locally:
```bash
yarn deploy-local
```

### Code Generation

Generate AssemblyScript types from the subgraph schema:
```bash
yarn codegen
```

### Building

Build the subgraph:
```bash
yarn build
```

### Testing

Run tests:
```bash
yarn test
```

## Deployment

Deploy to The Graph Studio:
```bash
yarn deploy
```

## Configuration

The subgraph is configured to track events from the Mirror Observer contract on Base network:
- Contract Address: `0x3F2408693cc2E0C8E0bb68f039cEB6DEac0EC072`
- Start Block: 1757721

## Events Tracked

1. `CloneDeployed`
   - Tracks when new Mirror clones are deployed
   - Parameters: creator, clone, implementation

2. `WritingEditionPurchased`
   - Tracks purchases of writing editions
   - Parameters: buyer, tokenId, creator, price, uri, quantity

## License

UNLICENSED