
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Package Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Standard</th>
                <th className="py-4 px-6 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">Price</td>
                <td className="py-4 px-6 text-center font-semibold">€49 one-time</td>
                <td className="py-4 px-6 text-center font-semibold">€89 one-time</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">User licenses</td>
                <td className="py-4 px-6 text-center">1</td>
                <td className="py-4 px-6 text-center">3</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">VSME Reporting Templates</td>
                <td className="py-4 px-6 text-center">Standard</td>
                <td className="py-4 px-6 text-center">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Dashboards</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Setup Support</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">1 hour</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Free Updates</td>
                <td className="py-4 px-6 text-center">1 year</td>
                <td className="py-4 px-6 text-center">3 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
