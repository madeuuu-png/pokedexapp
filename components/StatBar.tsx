// components/StatBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

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
    <View style={styles.statRow}>
      <View style={styles.statHeader}>
        <Text style={styles.statName}>
          {statName.replace('-', ' ')}
        </Text>
        <Text style={styles.statValue}>
          {statValue}
        </Text>
      </View>
      <View style={styles.statBarBackground}>
        <View
          style={[
            styles.statBarFill,
            { width: `${percentage}%` }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statRow: {
    marginBottom: 15,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  statName: {
    color: colors.secondary,
    textTransform: 'capitalize',
    fontSize: 14,
  },
  statValue: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  statBarBackground: {
    height: 10,
    backgroundColor: colors.inputBackground,
    borderRadius: 5,
    overflow: 'hidden',
  },
  statBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
});