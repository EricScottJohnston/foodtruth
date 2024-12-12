/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean the build cache
  cleanDistDir: true
}

module.exports = nextConfig
import { Icon } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
future: { webpack5: true }
const MyComponent = () => (
  <Icon as={MessageSquare} />
);
