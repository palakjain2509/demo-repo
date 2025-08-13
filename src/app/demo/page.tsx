/**
 * Demo page for MyGETS UI Components
 */

"use client";

import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Badge,
  MessageBar,
  Hero,
  FeatureCard,
  Title2,
  Body1
} from '@/components/MGUIComponent';
import {
  StarRegular,
  ShieldRegular,
  RocketRegular
} from '@fluentui/react-icons';

export default function DemoPage() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title2 style={{ marginTop: '48px', marginBottom: '48px', textAlign: 'center' }}>
        MyGETS UI Components Demo
      </Title2>

      {/* Hero Section */}
      <section style={{ marginBottom: '48px' }}>
        <Hero
          title="Welcome to MyGETS"
          subtitle="Professional Grade Solutions"
          description="Experience the power of our modular design system built with Fluent UI v9"
          primaryAction={{
            text: "Get Started",
            onClick: () => alert("Get Started clicked!")
          }}
          secondaryAction={{
            text: "Learn More",
            onClick: () => alert("Learn More clicked!")
          }}
        />
      </section>

      {/* Buttons Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Buttons</Title2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Cards</Title2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card
            title="Basic Card"
            subtitle="Simple card example"
            actions={
              <Button variant="outline" size="small">
                Action
              </Button>
            }
          >
            <Body1>This is a basic card with title, subtitle, and action button.</Body1>
          </Card>
          
          <Card
            title="Card with Image"
            image="https://via.placeholder.com/300x200"
            actions={
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="outline" size="small">Secondary</Button>
              </div>
            }
          >
            <Body1>This card includes an image preview.</Body1>
          </Card>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Feature Cards</Title2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <FeatureCard
            icon={<StarRegular />}
            title="Premium Quality"
            description="High-quality components built with industry best practices"
            link={{ text: "Learn More", href: "#" }}
          />
          <FeatureCard
            icon={<ShieldRegular />}
            title="Secure & Reliable"
            description="Enterprise-grade security and reliability you can trust"
            link={{ text: "Learn More", href: "#" }}
          />
          <FeatureCard
            icon={<RocketRegular />}
            title="Fast Performance"
            description="Optimized for speed and performance across all devices"
            link={{ text: "Learn More", href: "#" }}
          />
        </div>
      </section>

      {/* Inputs Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Inputs</Title2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Input
            label="Name"
            placeholder="Enter your name"
            value={inputValue}
            onChange={setInputValue}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <Input
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </div>
      </section>

      {/* Badges Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Badges</Title2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </section>

      {/* Message Bars Section */}
      <section style={{ marginBottom: '48px' }}>
        <Title2 style={{ marginBottom: '16px' }}>Message Bars</Title2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <MessageBar intent="success" title="Success">
            Your operation completed successfully!
          </MessageBar>
          <MessageBar intent="warning" title="Warning">
            Please review your settings before proceeding.
          </MessageBar>
          <MessageBar intent="error" title="Error">
            An error occurred while processing your request.
          </MessageBar>
          <MessageBar intent="info">
            This is an informational message without a title.
          </MessageBar>
        </div>
      </section>
    </div>
  );
}