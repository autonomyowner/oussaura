'use client'

import { useState } from 'react'
import { DualRangeSlider } from './ui/DualRangeSlider'

const getBudgetCategory = (budget: number): string => {
  if (budget <= 800) {
    return 'Dépannage / Petite réparation'
  }
  if (budget <= 2500) {
    return 'Remplacement volet/rideau standard'
  }
  if (budget <= 6000) {
    return 'Porte blindée / vitrine moyenne'
  }
  return 'Enseigne complexe / façade / multi-lots'
}

const getCategoryDescription = (budget: number): string => {
  if (budget <= 800) {
    return 'Intervention rapide pour déblocage de rideau métallique, réparation de volet roulant ou sécurisation d\'urgence.'
  }
  if (budget <= 2500) {
    return 'Pose ou remplacement de volet roulant, rideau métallique manuel/motorisé, ou fenêtres ALU/PVC standard.'
  }
  if (budget <= 6000) {
    return 'Installation de porte blindée certifiée, vitrine commerciale moyenne, ou enseigne lumineuse LED.'
  }
  return 'Enseigne complexe sur-mesure, façade complète de commerce, ou installation multi-lots pour immeuble.'
}

const getCategoryColor = (budget: number): string => {
  if (budget <= 800) {
    return 'text-[#18A999]'
  }
  if (budget <= 2500) {
    return 'text-[#0B3C49]'
  }
  if (budget <= 6000) {
    return 'text-purple-600'
  }
  return 'text-emerald-600'
}

export const BudgetSlider = (): JSX.Element => {
  const [budget, setBudget] = useState<number[]>([0, 5000])

  const handleValueChange = (value: number[]): void => {
    setBudget(value)
  }

  const formatCurrency = (value: number): string => {
    return `${value.toLocaleString('fr-FR')} €`
  }

  const maxBudget = budget[1]
  const category = getBudgetCategory(maxBudget)
  const description = getCategoryDescription(maxBudget)
  const categoryColor = getCategoryColor(maxBudget)

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
          Estimation rapide (slider en €)
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Ajustez le curseur pour voir une estimation selon votre budget
        </p>
      </div>

      <div className="mb-12">
        <DualRangeSlider
          value={budget}
          onValueChange={handleValueChange}
          min={0}
          max={15000}
          step={100}
          className="mb-4"
          label={(value) => (
            <span className="text-xs font-semibold text-neutral-700">
              {value !== undefined ? formatCurrency(value) : ''}
            </span>
          )}
        />
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Votre Budget
            </p>
            <p className="mt-1 text-3xl font-elegant font-bold text-neutral-900">
              {formatCurrency(maxBudget)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Catégorie
            </p>
            <p className={`mt-1 text-xl font-semibold ${categoryColor}`}>
              {category}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white/80 p-4">
          <p className="text-sm leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center">
          <div
            className={`rounded-lg p-3 ${
              maxBudget <= 800
                ? 'bg-[#18A999]/10 border-2 border-[#18A999]'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Dépannage</p>
            <p className="mt-1 text-xs text-neutral-500">300 - 800 €</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              maxBudget > 800 && maxBudget <= 2500
                ? 'bg-[#0B3C49]/10 border-2 border-[#0B3C49]'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Remplacement</p>
            <p className="mt-1 text-xs text-neutral-500">800 - 2 500 €</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              maxBudget > 2500 && maxBudget <= 6000
                ? 'bg-purple-50 border-2 border-purple-300'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Installation</p>
            <p className="mt-1 text-xs text-neutral-500">2 500 - 6 000 €</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              maxBudget > 6000
                ? 'bg-emerald-50 border-2 border-emerald-300'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Complexe</p>
            <p className="mt-1 text-xs text-neutral-500">6 000 €+</p>
          </div>
        </div>
      </div>
    </div>
  )
}
