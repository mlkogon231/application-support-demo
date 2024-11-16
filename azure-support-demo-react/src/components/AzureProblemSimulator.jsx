'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AzureProblemSimulator = () => {
  const [status, setStatus] = useState('healthy');
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({
    cpu: 15,
    memory: 45,
    responseTime: 200,
    errorRate: 0
  });
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateIssue = () => {
    setIsSimulating(true);
    setMetrics({
      cpu: 85,
      memory: 92,
      responseTime: 1500,
      errorRate: 15
    });
  };

  const runDiagnostics = () => {
    setMetrics(prev => ({
      ...prev,
      responseTime: 1200,
      errorRate: 12
    }));
  };

  const applyFix = () => {
    setTimeout(() => {
      setMetrics({
        cpu: 15,
        memory: 45,
        responseTime: 200,
        errorRate: 0
      });
      setIsSimulating(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Azure Application Support Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-stone-500">CPU Usage</div>
              <div className={`text-2xl font-bold ${metrics.cpu > 80 ? 'text-red-500' : 'text-green-500'}`}>
                {metrics.cpu}%
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-stone-500">Memory</div>
              <div className={`text-2xl font-bold ${metrics.memory > 80 ? 'text-red-500' : 'text-green-500'}`}>
                {metrics.memory}%
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-stone-500">Response Time</div>
              <div className={`text-2xl font-bold ${metrics.responseTime > 1000 ? 'text-red-500' : 'text-green-500'}`}>
                {metrics.responseTime}ms
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-stone-500">Error Rate</div>
              <div className={`text-2xl font-bold ${metrics.errorRate > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {metrics.errorRate}%
              </div>
            </div>
          </div>

          <div className="space-x-2">
            <Button 
              onClick={simulateIssue} 
              disabled={isSimulating}
            >
              Simulate Issue
            </Button>
            <Button 
              variant="outline"
              onClick={runDiagnostics}
              disabled={!isSimulating}
            >
              Run Diagnostics
            </Button>
            <Button 
              variant="outline"
              onClick={applyFix}
              disabled={!isSimulating}
            >
              Apply Fix
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AzureProblemSimulator;