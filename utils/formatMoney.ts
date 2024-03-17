export const formatMoney = (amount?: string, code?: string) => {
  const getLocale = code ? `en-${code.slice(0, 2)}` : 'en-NG';

  return new Intl.NumberFormat(getLocale, {
    style: 'currency',
    currency: code || 'NGN',
  }).format(Number(amount ? amount.replace('N', '') : 0));
};
