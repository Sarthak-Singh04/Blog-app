# Stage 1: Build the Next.js application
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy yarn.lock and package.json files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Setup the runtime environment
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to start the Next.js application
CMD ["yarn", "start"]
