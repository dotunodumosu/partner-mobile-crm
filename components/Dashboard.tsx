'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BillingStatus } from '../types';
import { AlertCircle } from 'lucide-react';
import { useInventory } from '../contexts/InventoryContext';
import { useRouter } from 'next/navigation';
import { useDashboardStats } from '../hooks/useDashboardStats';

import { DashboardStats } from './dashboard/DashboardStats';
import { RevenueChart } from './dashboard/RevenueChart';
import { CategoryChart } from './dashboard/CategoryChart';
import { SalesVolumeChart } from './dashboard/SalesVolumeChart';
import { RecentActivity } from './dashboard/RecentActivity';
import { InventoryDistributionChart } from './dashboard/InventoryDistributionChart';
import { BillingChart } from './dashboard/BillingChart';

export const Dashboard: React.FC = () => {
  const { products } = useInventory();
  const router = useRouter();
  
  const {
    totalInventory,
    soldCount,
    returnedCount,
    inStockCount,
    unbilledCount,
    unbilledValue,
    totalRevenue,
    monthlyRevenue,
    averageSale,
    monthlyRevenueData,
    categoryRevenueData,
    recentActivities
  } = useDashboardStats(products);

  const handleNavigate = (filters: { status: string; billing: string }) => {
    const params = new URLSearchParams();
    if (filters.status !== 'ALL') params.set('status', filters.status);
    if (filters.billing !== 'ALL') params.set('billing', filters.billing);
    router.push(`/inventory?${params.toString()}`);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
      <div className="flex items-center gap-5">
       <Link href="/dashboard">
          <Image
            src="/images/partner-logo.png"
            alt="Partner Mobile"
            width={120}
            height={45}
            priority
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          />
      </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Partner Mobile CRM
            </h1>

          <p className="text-sm text-gray-500">
            Sales • Inventory • Billing Dashboard
            </p>
        </div>
      </div>

      <button
        onClick={() => router.push('/inventory?action=add')}
        className="flex items-center gap-2 bg-[var(--partner-red)] hover:bg-[var(--partner-red-dark)] text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition-all"
      >
        <span className="text-lg leading-none">+</span>
        Add Product
      </button>

      {/* Financial Metrics */}
      <DashboardStats
        totalRevenue={totalRevenue}
        monthlyRevenue={monthlyRevenue}
        averageSale={averageSale}
        unbilledValue={unbilledValue}
        soldCount={soldCount}
        unbilledCount={unbilledCount}
        handleNavigate={handleNavigate}
      />

      {/* Revenue Trend Chart */}
      <RevenueChart data={monthlyRevenueData} />

      {/* Category Revenue & Sales Volume */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryChart data={categoryRevenueData} />
        <SalesVolumeChart data={monthlyRevenueData} />
      </div>

      {/* Recent Activity Feed */}
      <RecentActivity activities={recentActivities} />

      {/* Inventory Distribution & Billing Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InventoryDistributionChart
          inStockCount={inStockCount}
          soldCount={soldCount}
          returnedCount={returnedCount}
        />

        <BillingChart
          billedCount={products.length - unbilledCount}
          unbilledCount={unbilledCount}
          unbilledValue={unbilledValue}
          totalProducts={totalInventory}
        />
      </div>
    </div>
  );
};