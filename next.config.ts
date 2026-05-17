import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  allowedDevOrigins: ["192.168.101.9"]
};

export default withNextIntl(nextConfig);