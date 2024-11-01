# Build stage
FROM node:18-alpine AS builder

# Install pnpm
RUN corepack enable pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies (including dev dependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:18-alpine AS production

# Install pnpm
RUN corepack enable pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application from builder stage
COPY --from=builder /app/.output ./

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]