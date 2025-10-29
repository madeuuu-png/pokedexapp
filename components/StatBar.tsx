// components/StatBar.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface StatBarProps {
  statName: string;
  statValue: number;
  maxValue?: number;
}

export const StatBar: React.FC<StatBarProps> = ({ 
  statName, 
  statValue, 
  maxValue = 255 
}) => {
  const percentage = (statValue / maxValue) * 100;
  
  return (
    <View className="mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="text-pokemon-light-pink capitalize text-sm">
          {statName.replace('-', ' ')}
        </Text>
        <Text className="text-pokemon-pink font-bold text-sm">
          {statValue}
        </Text>
      </View>
      <View className="h-2.5 bg-pokemon-input rounded-md overflow-hidden">
        <View
          className="h-full bg-pokemon-pink rounded-md"
          style={{ width: `${percentage}%` }}
        />
      </View>
    </View>
  );
};